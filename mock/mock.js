

const Mock = (app) => {
    app.get('/api/user/info', function (req, res) {
        res.json({
            status: "ok",
            data: {
                name: '13535032936',
                avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
                userid: '13535032936',
                email: 'antdesign@alipay.com',
                access: 'admin',
                phone: '13535032936',
            }
        })
    })
    app.get('/api/user/login', function (req, res) {
        res.json({
            status: 'ok',
            data: {
                token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MzI3MjU2ODIsImlhdCI6MTYwNjgwNTY4MiwicGhvbmUiOiIxMzUzNTAzMjkzNiJ9.BY-dsK8YFIofIDah7qufUJJKlPyfSdhzt4cBmRx1CCo'
            }
        })
    })
    app.get('/api/position/virtual/list', function (req, res) {
        res.json({
            status: 'ok',
            data: [
                {
                    key: '1',
                    name: 'BTC',
                    status: 'enable',
                    directions: ['buy', 'sell'],
                    contractTypes: ['quarter', 'next_quarter', 'this_week', 'next_week']
                },
                {
                    key: '2',
                    name: 'ETH',
                    status: 'enable',
                    directions: ['buy', 'sell'],
                    contractTypes: ['quarter', 'next_quarter', 'this_week', 'next_week']
                },
                {
                    key: '3',
                    name: 'ETC',
                    status: 'disable',
                    directions: ['buy', 'sell'],
                    contractTypes: ['quarter', 'next_quarter', 'this_week', 'next_week']
                },
            ]
        })
    })
    app.get('/api/position/huobi/list', function (req, res) {
        res.json({
            status: 'ok',
            data: [
                {
                    key: '1',
                    name: 'BTC',
                    status: 'enable',
                    directions: ['buy', 'sell'],
                    contractTypes: ['quarter', 'next_quarter', 'this_week', 'next_week']
                }
            ]
        })
    })
}

module.exports = Mock