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

exports.getUserById = (req, res) => {
    const user = user.find(u => u.id === req.params.id);

    if(user) {
        return res.json({ messages: 'User not found' });
    }

    res.json(user);
}

