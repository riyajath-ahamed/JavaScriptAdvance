const packages : { id: string; Priority: string; timestamp: number }[] = 
    [ 
        {
            id: "ID001",
            Priority: "High",
            timestamp: 2000,

        },
        {
            id: "ID002",
            Priority: "High",
            timestamp: 3000,
        },
        {
            id: "ID003",
            Priority: "Medium",
            timestamp: 4000,
        },
        {
            id: "ID004",
            Priority: "Medium",
            timestamp: 2000,
        },
        {
            id: "ID005",
            Priority: "Low",
            timestamp: 1000,
        }
       
    ]

    function seduleDelivery(packages: { id: string; Priority: string; timestamp: number }[]) {
        const priorityOrder = ["High", "Medium", "Low"];

        // return packages.sort((a, b) => {
        //     const priorityComparison = priorityOrder.indexOf(a.Priority) - priorityOrder.indexOf(b.Priority);
        //     if (priorityComparison !== 0) {
        //         return priorityComparison;
        //     }
        //     return a.timestamp - b.timestamp;

        // });

        const sortedPackages = packages.map(pkg => ({ ...pkg, priorityValue: priorityOrder.indexOf(pkg.Priority) }))
            .sort((a, b) => {
                if (a.priorityValue !== b.priorityValue) {
                    return a.priorityValue - b.priorityValue;
                }
                return a.timestamp - b.timestamp;
            })
            .map(({ id}) => id);
        return sortedPackages;

    }
    const sortedPackages = seduleDelivery(packages);
    console.log(sortedPackages);
