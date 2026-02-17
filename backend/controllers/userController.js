const user = []; 

exports.createUser = (req, res ) => {
    const { name } = req.body || {};

    const user = {
        id: Date.now().toString(),
        name
    };

    users.push(user);
    res.status(201).json(user)
}

exports.getUser = (req, res ) =>{
        res.json(users);
}

