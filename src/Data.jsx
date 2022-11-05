import { Banner, Checkbox, ChoiceList, Icon, Link, Modal, Stack, Text } from '@shopify/polaris';

import { ExternalMinor } from '@shopify/polaris-icons';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import useFetch from '../../custom hook/useFetch';
import { ACTIVE_TOAST, exportFile, REMOVE_NAME, SET_NAME } from '../../redux/Reducer';

const ExportModal = ({ exportModal, setExportModal, selectedRowKeys }) => {
    // Constants for Selects
    const CURRENT_PAGE = 'current_page';
    const ALL_PRODUCTS = 'all_products';
    const SELECTED_PRODUCTS = 'selected_products';
    const MATCH_ALL = 'found_matching_all';

    // Custom Hook importing
    const [data, setData] = useFetch();

    // Reducer state importing
    const toaststate = useSelector(state => state.toastReducer);
    const filterState = useSelector(state => state.filterReducer)
    const dispatch = useDispatch();

    // State for ChoiceList and CheckBoxes
    const [select, setSelect] = useState('')
    const [checked, setChecked] = useState({ selectAll: false, title: false, quantity: false, price: false, barcode: false, sku: false });


    const handleExport = () => {
        // Creating data to export in payload
        const dataToExport = checked.selectAll ? ['title', 'quantity', 'price', 'barcode', 'sku'] : [...Object.keys(checked).filter((val) => checked[val])];

        // Checking cases according to Selection and fetching data
        switch (select) {
            case CURRENT_PAGE:
                const payloadCurrent = {
                    "dataToExport": dataToExport,
                    "remove_last": true,
                    "type": "current",
                    "source_product_id": selectedRowKeys
                }
                setData(exportFile, 'post', payloadCurrent)
                break;

            case ALL_PRODUCTS:
                const payloadAll = {
                    "dataToExport": dataToExport,
                    "remove_last": true,
                    "type": "all"
                }
                setData(exportFile, 'post', payloadAll)
                break;

            case SELECTED_PRODUCTS:
                const payloadSelected = {
                    "dataToExport": dataToExport,
                    "remove_last": true,
                    "type": "current",
                    "source_product_id": selectedRowKeys
                }
                setData(exportFile, 'post', payloadSelected)
                break;

            case MATCH_ALL:
                const payloadMatch = {
                    "dataToExport": dataToExport,
                    "remove_last": true,
                    "type": "filter",
                    "filter": {

                    }
                }
                setData(exportFile, 'post', payloadMatch)
                break;

            default:
                return
        }
        dispatch(SET_NAME('export'));
    }

    // Use effect for toast to display notification message of API
    useEffect(() => {
        data && dispatch(ACTIVE_TOAST({ active: true, message: data.message, condition: data.success }));
        data && dispatch(REMOVE_NAME())
    }, [data, dispatch])

    // Function to handle Check Boxes
    const handleChecked = (e, id) => {
        if (id === 'selectAll')
            setChecked({ selectAll: true, title: true, quantity: true, price: true, barcode: true, sku: true })
        else
            setChecked(prev => { return { ...prev, [id]: !prev[id] } })
    }
    // Function to handle Close
    const handleClose = () => {
        setExportModal(false);
        setChecked({ selectAll: false, title: false, quantity: false, price: false, barcode: false, sku: false })
        setSelect('')
    }
    return (
        <Modal
            open={exportModal}
            onClose={handleClose}
            title="Export customers"
            primaryAction={{
                content: 'Export Products',
                onAction: handleExport,
                loading: toaststate.name === 'export'
            }}
            secondaryActions={[
                {
                    content: 'Cancel',
                    onAction: () => setExportModal(false),
                },
            ]}
        >
            <Modal.Section>
                <Stack vertical>
                    <Stack.Item>
                        <ChoiceList
                            title="Export"
                            choices={[
                                { label: 'Current page', value: CURRENT_PAGE, },
                                { label: 'All Products', value: ALL_PRODUCTS, },
                                { label: `Selected Products ${selectedRowKeys?.length} Products `, value: SELECTED_PRODUCTS, disabled: selectedRowKeys?.length === 0 },
                                { label: 'Found 50+ matching products corresponding to your search', value: MATCH_ALL, disabled: selectedRowKeys?.length < 50 },
                            ]}
                            selected={select}
                            onChange={(e) => { setSelect(...e); console.log(...e); }}
                        />
                    </Stack.Item>
                    <Stack.Item>
                        <Text variant='headingSm'>Please select the columns to be exported based on the applied filters</Text>
                        <Stack>
                            <Checkbox
                                label="All"
                                id='selectAll'
                                checked={checked.selectAll}
                                onChange={handleChecked}
                            />
                            <Checkbox
                                label="Title"
                                id='title'
                                checked={checked.title}
                                onChange={handleChecked}
                            />
                            <Checkbox
                                label="Quantity"
                                id='quantity'
                                checked={checked.quantity}
                                onChange={handleChecked}
                            />
                            <Checkbox
                                label="Price"
                                id='price'
                                checked={checked.price}
                                onChange={handleChecked}
                            />
                            <Checkbox
                                label="Barcode"
                                id='barcode'
                                checked={checked.barcode}
                                onChange={handleChecked}
                            />
                            <Checkbox
                                label="SKU"
                                id='sku'
                                checked={checked.sku}
                                onChange={handleChecked}
                            />
                        </Stack>
                    </Stack.Item>
                    <Stack.Item>
                        <Banner status='warning'>
                            <p>
                                To ensure seamless Product update, export the Product information in the form of a CSV file, make the necessary updates to this CSV file and then import this very same updated CSV file.</p>
                        </Banner>
                    </Stack.Item>
                    <Stack.Item>
                        <Text>
                            Learn more about <Link url='https://docs.cedcommerce.com/shopify/amazon-channel-cedcommerce/?section=csv-bulk-action' > exporting Products to CSV file</Link> or the <Link>
                                bulk editor.
                                <Icon source={ExternalMinor} color='interactive' />
                            </Link>
                        </Text>
                    </Stack.Item>
                </Stack>
            </Modal.Section>
        </Modal>
    )
}

export default ExportModal
