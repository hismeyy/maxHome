<script setup>
// 首页
</script>

<template>
    <div>
        <nav>
            <div id="left-nav">
                <router-link id="logo" to="/">
                    <img src="https://p4.itc.cn/images01/20230909/8fc0b351605b4db2af7d72bb85eed293.jpeg" alt="描述"
                        width="48" height="48">
                    <h1>工作站</h1>
                </router-link>
            </div>
            <div id="right-nav">
                <ul>
                    <li><router-link to="/">主页</router-link></li>
                    <li><router-link to="/about">介绍</router-link></li>
                    <li><router-link to="/services">服务</router-link></li>
                    <li><router-link to="/cases">案例</router-link></li>
                    <li><router-link to="/reviews">评价</router-link></li>
                    <li><router-link to="/contact">联系</router-link></li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<style>
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    padding: 40px 100px;
    box-sizing: border-box;
}

#left-nav {
    display: flex;
    align-items: center;
}

#logo {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #000080;
    /* Navy blue */
}

#logo img {
    margin-right: 10px;
}

#logo h1 {
    font-size: 1.5rem;
    margin: 0;
    color: #000080;
    /* Navy blue */
}

#right-nav {
    display: flex;
}

#right-nav ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
}

#right-nav li {
    margin-left: 20px;
}

#right-nav a {
    text-decoration: none;
    color: #2F4F4F;
    /* Dark gray */
    font-size: 1rem;
}

#right-nav a:hover {
    color: #6A5ACD;
    /* Slate blue */
}
</style>
