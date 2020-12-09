db.urls.aggregate({
    "$group": {
        _id: {
            date: {
                $dayOfMonth:"$date"
            },
        },
        count: {
            $sum: 1
        }
    }
   })