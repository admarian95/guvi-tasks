db.details.aggregate([
{$match:{}},
{
    $group:{
    _id:"$product_color",
total:{
    $sum:"$product_price"
},
average:{
    $avg:"product_price"
}
}
}
]);

db.topics.insert(
    {
        "topic_name" : 'topic_1',
        "date":new Date("2020-10-12")
    }
    )

    db.topics.insert(
        {
            "topic_name" : 'topic_2',
            "date":new Date("2020-09-15")
        }
        )

        db.topics.insert(
            {
                "topic_name" : 'topic_3',
                "date":new Date("2020-11-12")
            }
            ) 

            db.topics.insert(
                {
                    "topic_name" : 'topic_4',
                    "date":new Date("2020-10-31")
                }
                )

                db.topics.insert(
    {
        "topic_name" : 'topic_5',
        "date":new Date("2020-10-30")
    }
    )

db.company_drives.insertMany([
    {
        "name":"comp_1",
        "date":new Date("2020-10-30")
    },
    {
        "name":"comp_2",
        "date":new Date("2020-10-02")
    },
    {
        "name":"comp_3",
        "date":new Date("2020-10-18")
    },
    {
        "name":"comp_4",
        "date":new Date("2020-11-05")
    },
    {
        "name":"comp_5",
        "date":new Date("2020-12-20")
    }
])


