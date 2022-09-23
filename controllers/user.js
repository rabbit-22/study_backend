const fs = require('fs');
const USER_DB = './models/user.json';

const cookieConfig = {
    httpOnly: true,
    expires: new Date(Date.now() + 900000),
};

const getUsers = async () => {
    const json = await fs.promises.readFile(USER_DB, 'utf-8');
    return JSON.parse(json).users;
};

const getCount = async () => {
    const json = await fs.promises.readFile(USER_DB, 'utf-8');
    return JSON.parse(json).users.length;
}

const saveUsers = async (users) => {
    const content = {
        users,
    }
    await fs.promises.writeFile(
        USER_DB,
        JSON.stringify(content),
        'utf-8'
    )
};

const signUp = async (req, res) => {
    try {
        const id = await getCount() + 1;
        const user = {
            id: id,
            userId: req.body.userId,
            password: req.body.password,
        };
        const users = await getUsers();
        users.push(user);
        saveUsers(users);
        res.status(201).send(user);
    } catch (err) {
        res.status(err.status || 500).send(err.message);
    };
};

const login = async (req, res) => {
    try {
        const { userId, password } = req.body;
        const users = await getUsers();
        for (var i of users) {
            if (userId == i.userId && password == i.password) {
                req.session.userId = userId;
                res.cookie('session-id', userId, cookieConfig);
                return res.status(201).send();
            } 
        }
        res.status(401).send('invalid user');
    } catch (err) {
        res.status(err.status || 500).send(err.message);
    }
};

const logout = async (req, res) => {
    try {
        if(req.session) {
            req.session.destroy(function(err){
                if(err) {
                   console.log(err); 
                }else {
                    res.clearCookie('session-id');
                    res.redirect('/');
                }
            })
        } else {
            res.redirect('/'); // 로그인 상태 아님
        }
    } catch (err) {
        res.status(err.status || 500).send(err.message);
    }
};

module.exports = {
    signUp,
    login,
    logout,
};