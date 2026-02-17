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
    const user = users.find(u => u.id === req.params.id);

    if(user) {
        return res.json({ message: 'User not found' });
    }

    res.json(user);
}

exports.updateUser = (req, res) => {
    const { name} = req.body || {};
    const user = users.find(u => u.id === req.params.id);

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    if (!name) {
        return res.status(400).json({message: 'Name is required' });
    }

    user.name = name;
    res.json(user);
}

exports.deleteUser = (req, res) => {
    const index = users.findIndex(u => u.id === req.params.id);

    if (index === -1) {
        return res.status(404).json({message: 'User not found' });
    } 

    users.splice(index, 1);
    res.json({ message: 'User deleted succesfully' });
}

