const envList = {
  prod: {
    base_url: 'm.banzhuanke.com',
  },
  dev: {
    base_url: 'dev-m.banzhuanke.com',
  },
  test: {
    base_url: 'test-m.banzhuanke.com',
  },
};

// 每次手动修改环境变量
let currentEnv = 'prod';

// 根据当前浏览器环境动态设置环境
let params = {
  'dev-m.banzhuanke.com': 'dev',
  'test-m.banzhuanke.com': 'test',
  'm.banzhuanke.com': 'prod',
};

currentEnv = params[location.hostname];

export default envList[currentEnv];
