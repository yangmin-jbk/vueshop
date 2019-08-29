<template>
  <div class="login_container">
    <!-- 创建盒子 -->
    <div class="login_box">
      <!-- 头像区域 -->
      <div class="avatar_box">
        <img src="../assets/logo.png" alt />
      </div>
      <!-- 登录表单区域  :model="loginForm" 数据属性绑定 把数据放在data中    -->
      <!-- :rules="loginFormRule" 为表单绑定验证规则  -->
      <!-- ref设置表单实例对象,通过点击事件,拿到我们就可以重置表单  -->
      <el-form
        ref="loginFormRel"
        :model="loginForm"
        :rules="loginFormRule"
        label-width="0px"
        class="login_button"
      >
        <!-- 用户名 -->
        <!-- prop="username" 使用验证规则 -->
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" prefix-icon="iconfont icon-user"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <!--  v-model="loginForm.password" 双向绑定,获取表单属性的值 -->
          <el-input
            v-model="loginForm.password"
            prefix-icon="iconfont icon-3702mima"
            type="password"
          ></el-input>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item class="but">
          <!-- 绑定点击事件 -->
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 这是登录表单的数据绑定对象
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      //表单验证的对象
      loginFormRule: {
        //验证用户名和密码是否合法
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 点击事件
    resetLoginForm: function() {
      // this里面$refs包含了loginFormRel   就是表单的实例对象,里面就可以用方法,进行重置
      // console.log(this);
      // resetFields是重置的方法,在element,form表单下面
      this.$refs.loginFormRel.resetFields()
    },
    // 登录事件
    login: function() {
      // validate()是登录方法,获取的参数是boolean值,所以用箭头函数获取
      this.$refs.loginFormRel.validate(async valid => {
        //  console.log(valid);
        // 如果登录返回的是false就阻止
        if (!valid) {
          return
        } else {
          //  如果是打印promise对象,我们就用async await解决,返回的就是一个对象   如果输出的是对象,在对象中解构data var {data:res}
          //port第一个参数是请求地址,第二个是请求参数
          var { data: res } = await this.$http.post('login', this.loginForm)
          //   console.log(res);
          // 如果状态码不是200,就登录失败
          if (res.meta.status !== 200) {
            // console.log("登录失败");
            // 10.消息提示
            this.$message.error('登录失败')
            return
          } else {
            // console.log("登录成功");
            //10.消息提示
            this.$message.success('登录成功')
          }
          console.log(res)
          //    11.将登录之后的token,保存到客户端的sessionStorage,
          //    11.其他API需要在登录之后才能生效
          //    11.token在网页关闭之后消除了,所有token要保存在sessionStorage里面
          window.sessionStorage.setItem('token', res.data.token)
          // 11.通过编程式导航跳转到主页,路由地址是/home
          this.$router.push('/home')
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.login_container {
  background-color: pink;
  height: 100%;
}
.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  // 移动到中间
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .avatar_box {
    position: absolute;
    width: 130px;
    height: 130px;
    left: 50%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 10px #eee;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #fff;
    }
  }
}
.login_button {
  position: absolute;
  bottom: 0px;
  width: 100%;
  padding: 0 20px;
  //   不让盒子到挤出去
  box-sizing: border-box;
}
.but {
  display: flex;
  // 怪异盒模型修改成最右边
  justify-content: flex-end;
}
</style>