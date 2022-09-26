const dev = process.env.NODE_ENV === 'development' ? true : false;
let BaseURL = '';

if(dev) {
    BaseURL = '/api'; // 本地webpack本地代理
} else {
    BaseURL = 'http://10.10.10.32:8080'; // 服务器ngix反向代理 
}

export { BaseURL };