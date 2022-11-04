  const columnsChild = [
        {
            title: 'image',
            dataIndex: 'main_image',
            render: (src) => <>
                {src.includes('https') ? <img src={src} alt='' width={'60px'} height='64px' /> : <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png'} alt='' width={'60px'} height='64px' />} </>
        },
        {
            title: 'Title',
            dataIndex: 'title',
        },
        {
            title: 'Product Details',
            dataIndex: 'price',
            render: (price, record) =>
                <>
                    {price && <Text> Price : ${price} </Text>}
                    {record.sku && <Text> SKU : {record.sku} </Text>}
                    {record.barcode ? <Text> Barcode : {record.barcode} </Text> : <Text> Barcode : N/A </Text>}
                    {record.asin ? <Text> ASIN : {record.asin} </Text> : <Text> ASIN : N/A </Text>}
                </>
        },
        {
            title: 'Inventory',
            dataIndex: 'quantity',
            render: (quantity) =>
                <Text>{quantity}</Text>
        },
        {
            title: 'Amazon Status',
            dataIndex: 'status',
            render: (status) => <>{status ? <Badge> status </Badge> : <Badge> N/A </Badge>}</>
        },
        {
            title: 'Activity',
            dataIndex: 'process_tags',
            render: (process_tags) => <>{process_tags ? <Badge> process_tags </Badge> : <Text> -- </Text>}</>
        },
    ];
