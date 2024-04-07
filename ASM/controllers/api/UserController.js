const UserModel = require("../../model/user");


exports.getUser = async (req, res, next) => {
    const users = await UserModel.findAll({
        attributes: ['id', 'name', 'email', 'password', 'status', 'phone', 'address']
    });
    res.status(200).json({
        users: users
    })

}

exports.signUpUser = async (req, res, next) => {
    try {
        const users = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            status: req.body.status,
            phone: req.body.phone,
            address: req.body.address
        }

        const userResponse = await UserModel.create(users,{ fields: ['name', 'email', 'password', 'status', 'phone', 'address']})
        res.status(201).json({
            message: 'Thêm tài khoản thành công',
            users: userResponse
        })


    } catch (error) {
        console.error("Lỗi khi tạo tài khoản:", error);
        res.status(500).json({
            message: "Đã xảy ra lỗi khi tạo tài khoản"
        });
    }
}
