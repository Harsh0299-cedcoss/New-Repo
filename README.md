const columns = [
        {
            title: 'Image',
            dataIndex: 'main_image',
            render: (src) => <>
                {src.includes('https') ? <img src={src} alt='' width={'60px'} height='64px' /> : <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png'} alt='' width={'60px'} height='64px' />}
            </>,
        },
        {
            title: 'Title',
            dataIndex: 'title',
        },
        {
            title: 'Product Details',
            dataIndex: 'items',
            render: (items) =>
                <>
                    {items[0]?.price && <Text> Price : ${items[0].price} </Text>}
                    {items[0]?.sku && <Text> SKU : {items[0].sku} </Text>}
                    {items[0]?.barcode ? <Text> Barcode : {items[0].barcode} </Text> : <Text> Barcode : N/A </Text>}
                    {items[0]?.asin ? <Text> ASIN : {items[0].asin} </Text> : <Text> ASIN : N/A </Text>}
                </>
        },
        {
            title: 'Template',
            dataIndex: 'profile',
            render: (profile) =>
                <>
                    {profile?.profile_name ? <Text > {profile.profile_name} </Text> : <Text> N/A </Text>}
                </>
        },
        {
            title: 'Inventory',
            dataIndex: 'items',
            render: (items) =>
                <Text>{items.reduce((sum, val) => sum += val?.quantity || 0, 0)} in Stock for {items.length} variants</Text>
        },
        {
            title: 'Amazon Status',
            dataIndex: 'items',
            render: (items) => <>{items[0]?.status ? <Badge> items[0]?.status </Badge> : <Badge> N/A </Badge>}</>
        },
        {
            title: 'Activity',
            dataIndex: 'items',
            render: (items) => <>{items[0]?.process_tags ? <Badge> items[0]?.process_tags </Badge> : <Text> -- </Text>}</>
        },
        {
            title: 'Actions',
            render: () => <Button> <Icon
                source={MobileVerticalDotsMajor}
                color="base"
            /> </Button>
        },
    ];
