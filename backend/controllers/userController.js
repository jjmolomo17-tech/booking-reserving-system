const user = []; 

exports.createUser = (req, res ) => {
    const { name }= req.body || {};

    if (!name) {
        return res.status(400).json({ error: 'Name is required.' });
    }

    const user = {
        id: Date.now{}.toString(),
        name
    };

    users.push(user);
    res.status(201).json(user)
}