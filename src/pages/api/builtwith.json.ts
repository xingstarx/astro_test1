//静态文件端点
// 输出: /api/builtwith.json

import RequestIp from '@supercharge/request-ip';

export async function get({params, request}) {
    // const ip = request.ip; // 获取请求的IP地址
    // const ip = request.headers.get('x-real-ip'); // 获取客户端IP地址
    // const ip = request.headers.get('x-real-ip') ?? request.headers.get('x-forwarded-for')?.split(',')[0] ?? request.conn.remoteAddr.hostname;
    const ip = RequestIp.getClientIp(request)
    console.log("ip = " + ip);
    return {
      body: JSON.stringify({
        name: 'Astro',
        url: 'https://astro.build/',
        ip: ip === undefined ? "" : ip, // 将IP地址添加到返回的JSON对象中
      }),
    };
  }