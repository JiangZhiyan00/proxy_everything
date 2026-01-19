// Icon Base64 常量
const ICON_BASE64 = "data:image/png;base64,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";

// worker固定格式，不可更改
addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

// 必须是这个方法名（worker固定格式，不可更改）
async function handleRequest(request) {
  try {
    const url = new URL(request.url);

    // 如果访问根目录，返回HTML
    if (url.pathname === "/") {
      return new Response(getRootHtml(), {
        headers: {
          "Content-Type": "text/html; charset=utf-8",
          // 永久缓存,1年有效期,immutable表示内容永不改变
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      });
    }

    // 代理必应每日壁纸,缓存到北京时间第二天0点
    if (url.pathname === "/bing-bg") {
      const bingResponse = await fetch('https://imgapi.cn/bing.php');

      // 计算到北京时间(UTC+8)第二天0点的秒数
      const now = new Date();
      const beijingTime = new Date(now.getTime() + (8 * 60 * 60 * 1000)); // 转换为北京时间
      const tomorrow = new Date(beijingTime);
      tomorrow.setUTCDate(tomorrow.getUTCDate() + 1);
      tomorrow.setUTCHours(0, 0, 0, 0); // 设置为第二天0点
      const secondsUntilMidnight = Math.floor((tomorrow - beijingTime) / 1000);

      return new Response(bingResponse.body, {
        status: bingResponse.status,
        statusText: bingResponse.statusText,
        headers: {
          "Content-Type": bingResponse.headers.get("Content-Type") || "image/jpeg",
          // 缓存到北京时间第二天0点
          "Cache-Control": `public, max-age=${secondsUntilMidnight}`,
          // 添加 CORS 头,允许跨域访问
          "Access-Control-Allow-Origin": "*",
        },
      });
    }

    // 从请求路径中提取目标 URL
    let actualUrlStr = decodeURIComponent(url.pathname.replace("/", ""));

    // 判断用户输入的 URL 是否带有协议
    actualUrlStr = ensureProtocol(actualUrlStr, url.protocol);

    // 保留查询参数
    actualUrlStr += url.search;

    // 创建新 Headers 对象，排除以 'cf-' 开头的请求头
    const newHeaders = filterHeaders(
      request.headers,
      (name) => !name.startsWith("cf-")
    );

    // 创建一个新的请求以访问目标 URL
    const modifiedRequest = new Request(actualUrlStr, {
      headers: newHeaders,
      method: request.method,
      body: request.body,
      redirect: "manual",
    });

    // 发起对目标 URL 的请求
    const response = await fetch(modifiedRequest);
    let body = response.body;

    // 处理重定向
    if ([301, 302, 303, 307, 308].includes(response.status)) {
      // 创建新的 Response 对象以修改 Location 头部
      return handleRedirect(response, body);
    } else if (response.headers.get("Content-Type")?.includes("text/html")) {
      body = await handleHtmlContent(
        response,
        url.protocol,
        url.host,
        actualUrlStr
      );
    }

    // 创建修改后的响应对象
    const modifiedResponse = new Response(body, {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
    });

    // 添加禁用缓存的头部
    setNoCacheHeaders(modifiedResponse.headers);

    // 添加 CORS 头部，允许跨域访问
    setCorsHeaders(modifiedResponse.headers);

    return modifiedResponse;
  } catch (error) {
    // 如果请求目标地址时出现错误，返回带有错误消息的响应和状态码 500（服务器错误）
    return jsonResponse(
      {
        error: error.message,
      },
      500
    );
  }
}

// 确保 URL 带有协议
function ensureProtocol(url, defaultProtocol) {
  return url.startsWith("http://") || url.startsWith("https://")
    ? url
    : defaultProtocol + "//" + url;
}

// 处理重定向
function handleRedirect(response, body) {
  const location = new URL(response.headers.get("location"));
  const modifiedLocation = `/${encodeURIComponent(location.toString())}`;
  return new Response(body, {
    status: response.status,
    statusText: response.statusText,
    headers: {
      ...response.headers,
      Location: modifiedLocation,
    },
  });
}

// 处理 HTML 内容中的相对路径
async function handleHtmlContent(response, protocol, host, actualUrlStr) {
  const originalText = await response.text();
  // const regex = new RegExp("((href|src|action)=[\"'])/(?!/)", "g");
  return replaceRelativePaths(
    originalText,
    protocol,
    host,
    new URL(actualUrlStr).origin
  );
}

// 替换 HTML 内容中的相对路径
function replaceRelativePaths(text, protocol, host, origin) {
  const regex = new RegExp("((href|src|action)=[\"'])/(?!/)", "g");
  return text.replace(regex, `$1${protocol}//${host}/${origin}/`);
}

// 返回 JSON 格式的响应
function jsonResponse(data, status) {
  return new Response(JSON.stringify(data), {
    status: status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
}

// 过滤请求头
function filterHeaders(headers, filterFunc) {
  return new Headers([...headers].filter(([name]) => filterFunc(name)));
}

// 设置禁用缓存的头部
function setNoCacheHeaders(headers) {
  headers.set("Cache-Control", "no-store");
}

// 设置 CORS 头部
function setCorsHeaders(headers) {
  headers.set("Access-Control-Allow-Origin", "*");
  headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  headers.set("Access-Control-Allow-Headers", "*");
}

// 返回根目录的 HTML
function getRootHtml() {
  return `<!DOCTYPE html>
    <html lang="zh-CN">
    <head>
      <meta charset="UTF-8">
      <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" rel="stylesheet">
      <title>Proxy Everything</title>
      <link rel="icon" type="image/png" href="${ICON_BASE64}">
      <meta name="Description" content="Proxy Everything with CF Workers.">
      <meta property="og:description" content="Proxy Everything with CF Workers.">
      <meta property="og:image" content="${ICON_BASE64}">
      <meta name="robots" content="index, follow">
      <meta http-equiv="Content-Language" content="zh-CN">
      <meta name="copyright" content="Copyright © jiangzhiyan">
      <meta name="author" content="jiangzhiyan">
      <link rel="apple-touch-icon-precomposed" sizes="120x120" href="${ICON_BASE64}">
      <meta name="mobile-web-app-capable" content="yes">
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
      <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
      <style>
          :root {
              --overlay-opacity: 0.35;
              --overlay-color: 0, 0, 0;
          }
          body, html {
              height: 100%;
              margin: 0;
          }
          .background {
              /* 背景图片配置 */
              background-image:
                  linear-gradient(
                      rgba(var(--overlay-color), var(--overlay-opacity)),
                      rgba(var(--overlay-color), var(--overlay-opacity))
                  ),
                  url('/bing-bg');
              background-size: cover;
              background-position: center;
              background-repeat: no-repeat;
              background-attachment: fixed; /* 视差效果 */
              background-color: #2c3e50; /* 备用颜色,图片加载失败时显示 */
              
              /* 布局 */
              height: 100%;
              min-height: 100vh;
              display: flex;
              align-items: center;
              justify-content: center;
              
              /* 性能优化 */
              will-change: background-image;
              transform: translateZ(0); /* 启用GPU加速 */
              -webkit-backface-visibility: hidden;
              backface-visibility: hidden;
              
              /* 平滑过渡 */
              transition: background-image 0.5s ease-in-out;
          }
          
          /* 响应式优化 - 移动设备 */
          @media (max-width: 768px) {
              .background {
                  background-attachment: scroll; /* 移动设备上禁用fixed,提升性能 */
                  background-position: center center;
              }
          }
          
          /* 可访问性 - 减少动画 */
          @media (prefers-reduced-motion: reduce) {
              .background {
                  transition: none;
                  background-attachment: scroll;
              }
          }
          .card {
              border-radius: 15px;
              background-color: rgba(255, 255, 255, 0.8);
              transition: background-color 0.3s ease, box-shadow 0.3s ease;
          }
          .card:hover {
              background-color: rgba(255, 255, 255, 1);
              box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3);
          }
          .input-field input[type=text] {
              color: #2c3e50;
          }
          .input-field input[type=text]:focus+label {
              color: #2c3e50 !important;
          }
          .input-field input[type=text]:focus {
              border-bottom: 1px solid #2c3e50 !important;
              box-shadow: 0 1px 0 0 #2c3e50 !important;
          }
          .btn:disabled {
              opacity: 0.5;
              cursor: not-allowed;
              pointer-events: none;
          }
      </style>
    </head>
    <body>
      <div class="background">
          <div class="container">
              <div class="row">
                  <div class="col s12 m8 offset-m2 l6 offset-l3">
                      <div class="card">
                          <div class="card-content">
                              <span class="card-title center-align"><i class="material-icons left">link</i>Proxy Everything</span>
                              <form id="urlForm" onsubmit="redirectToProxy(event)">
                                  <div class="input-field">
                                      <input type="text" id="targetUrl" placeholder="在此输入目标地址" oninput="checkInput()">
                                      <label for="targetUrl">目标地址</label>
                                  </div>
                                  <button type="submit" id="submitBtn" class="btn waves-effect waves-light teal darken-2 full-width" disabled>跳转</button>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
      <script>
          function checkInput() {
              const targetUrl = document.getElementById('targetUrl').value.trim();
              const submitBtn = document.getElementById('submitBtn');
              submitBtn.disabled = !targetUrl; // 如果trim后为空则禁用按钮
          }
          
          function redirectToProxy(event) {
              event.preventDefault();
              const targetUrl = document.getElementById('targetUrl').value.trim();
              if (!targetUrl) {
                  return; // 如果为空,直接返回,不做任何操作
              }
              const currentOrigin = window.location.origin;
              window.open(currentOrigin + '/' + encodeURIComponent(targetUrl), '_blank');
          }
      </script>
    </body>
    </html>`;
}
