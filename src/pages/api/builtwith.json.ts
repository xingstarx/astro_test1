//静态文件端点
// 输出: /api/builtwith.json
export async function get({params, request}) {
    return {
      body: JSON.stringify({
        name: 'Astro',
        url: 'https://astro.build/',
      }),
    };
  }