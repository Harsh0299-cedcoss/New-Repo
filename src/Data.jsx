<Popover active={onSelect} activator={activatorOnSelect} autofocusTarget='none'
                    onClose={() => setOnSelect(false)}  >
                    <Popover.Pane >
                        <Popover.Section >
                            <Button removeUnderline monochrome plain onClick={() => setSelectModal({ topText: UPLOAD_PRODUCT, buttonText: "Proceed", text: 'Do you want to upload the selected product(s) ?', open: true })}>Upload Product</Button>
                        </Popover.Section>
                        <Popover.Section >
                            <Button removeUnderline monochrome plain onClick={() => setSelectModal({ topText: SYNC_PRODUCT, buttonText: "Confirm", text: 'Do you want to Sync the selected products with Amazon?', open: true })}>Sync Product</Button>
                        </Popover.Section>
                        <Popover.Section >
                            <Button removeUnderline monochrome plain onClick={() => setSelectModal({ topText: Amazon_LOOKUP, buttonText: "Proceed", text: 'You can choose to run Amazon Lookup for any number of products you want. This will update the status of those products that are currently under “Not Listed: Offer” status.', open: true })}>Amazon Lookup</Button>
                        </Popover.Section>
                        <Popover.Section>
                            <ActionList
                                actionRole="menuitem"
                                items={[
                                    { content: 'Sync Inventory', onAction: () => setSelectModal({ topText: SYNC_INVENTORY, buttonText: "Confirm", text: 'Do you want to Sync the inventory for the selected products with Amazon?', open: true }) },
                                    { content: 'Sync Price', onAction: () => setSelectModal({ topText: SYNC_PRICE, buttonText: "Confirm", text: 'Do you want to Sync the price for the selected products with Amazon?', open: true }) },
                                    { content: 'Sync Image', onAction: () => setSelectModal({ topText: SYNC_IMAGE, buttonText: "Confirm", text: 'Do you want to Sync the image for the selected products with Amazon?', open: true }) },
                                ]}
                            />
                        </Popover.Section>
                    </Popover.Pane>
                    <Popover.Pane fixed>
                        <Popover.Section  >
                            <Button destructive removeUnderline plain onClick={() => setSelectModal({ topText: DELETE_PRODUCTS, buttonText: "Delete", text: 'Are you sure you want to delete the selected products?', open: true })}> Delete Products </Button>
                        </Popover.Section>
                    </Popover.Pane>
                </Popover>
