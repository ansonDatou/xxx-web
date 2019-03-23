<template>
  <el-dialog
    :title="!dataForm.id ? '新增' : '修改'"
    :close-on-click-modal="false"
    :visible.sync="visible">
    <el-form :model="dataForm" :rules="dataRule" ref="dataForm" @keyup.enter.native="dataFormSubmit()" label-width="80px">
    <el-form-item label="用户编号，7-10位随机数" prop="userNo">
      <el-input v-model="dataForm.userNo" placeholder="用户编号，7-10位随机数"></el-input>
    </el-form-item>
    <el-form-item label="微信openid" prop="openid">
      <el-input v-model="dataForm.openid" placeholder="微信openid"></el-input>
    </el-form-item>
    <el-form-item label="微信appid" prop="appid">
      <el-input v-model="dataForm.appid" placeholder="微信appid"></el-input>
    </el-form-item>
    <el-form-item label="微信unionid" prop="unionid">
      <el-input v-model="dataForm.unionid" placeholder="微信unionid"></el-input>
    </el-form-item>
    <el-form-item label="用户名==手机号" prop="username">
      <el-input v-model="dataForm.username" placeholder="用户名==手机号"></el-input>
    </el-form-item>
    <el-form-item label="用户昵称" prop="nickname">
      <el-input v-model="dataForm.nickname" placeholder="用户昵称"></el-input>
    </el-form-item>
    <el-form-item label="手机号" prop="mobile">
      <el-input v-model="dataForm.mobile" placeholder="手机号"></el-input>
    </el-form-item>
    <el-form-item label="邮箱" prop="email">
      <el-input v-model="dataForm.email" placeholder="邮箱"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="dataForm.password" placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item label="头像" prop="avatarUrl">
      <el-input v-model="dataForm.avatarUrl" placeholder="头像"></el-input>
    </el-form-item>
    <el-form-item label="0=未知，1=男，2=女" prop="gender">
      <el-input v-model="dataForm.gender" placeholder="0=未知，1=男，2=女"></el-input>
    </el-form-item>
    <el-form-item label="国家" prop="country">
      <el-input v-model="dataForm.country" placeholder="国家"></el-input>
    </el-form-item>
    <el-form-item label="省份" prop="province">
      <el-input v-model="dataForm.province" placeholder="省份"></el-input>
    </el-form-item>
    <el-form-item label="城市" prop="city">
      <el-input v-model="dataForm.city" placeholder="城市"></el-input>
    </el-form-item>
    <el-form-item label="创建时间" prop="createTime">
      <el-input v-model="dataForm.createTime" placeholder="创建时间"></el-input>
    </el-form-item>
    <el-form-item label="0=未删除，1=删除" prop="deleted">
      <el-input v-model="dataForm.deleted" placeholder="0=未删除，1=删除"></el-input>
    </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="visible = false">取消</el-button>
      <el-button type="primary" @click="dataFormSubmit()">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
  export default {
    data () {
      return {
        visible: false,
        dataForm: {
          userId: 0,
          userNo: '',
          openid: '',
          appid: '',
          unionid: '',
          username: '',
          nickname: '',
          mobile: '',
          email: '',
          password: '',
          avatarUrl: '',
          gender: '',
          country: '',
          province: '',
          city: '',
          createTime: '',
          deleted: ''
        },
        dataRule: {
          userNo: [
            { required: true, message: '用户编号，7-10位随机数不能为空', trigger: 'blur' }
          ],
          openid: [
            { required: true, message: '微信openid不能为空', trigger: 'blur' }
          ],
          appid: [
            { required: true, message: '微信appid不能为空', trigger: 'blur' }
          ],
          unionid: [
            { required: true, message: '微信unionid不能为空', trigger: 'blur' }
          ],
          username: [
            { required: true, message: '用户名==手机号不能为空', trigger: 'blur' }
          ],
          nickname: [
            { required: true, message: '用户昵称不能为空', trigger: 'blur' }
          ],
          mobile: [
            { required: true, message: '手机号不能为空', trigger: 'blur' }
          ],
          email: [
            { required: true, message: '邮箱不能为空', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '密码不能为空', trigger: 'blur' }
          ],
          avatarUrl: [
            { required: true, message: '头像不能为空', trigger: 'blur' }
          ],
          gender: [
            { required: true, message: '0=未知，1=男，2=女不能为空', trigger: 'blur' }
          ],
          country: [
            { required: true, message: '国家不能为空', trigger: 'blur' }
          ],
          province: [
            { required: true, message: '省份不能为空', trigger: 'blur' }
          ],
          city: [
            { required: true, message: '城市不能为空', trigger: 'blur' }
          ],
          createTime: [
            { required: true, message: '创建时间不能为空', trigger: 'blur' }
          ],
          deleted: [
            { required: true, message: '0=未删除，1=删除不能为空', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      init (id) {
        this.dataForm.userId = id || 0
        this.visible = true
        this.$nextTick(() => {
          this.$refs['dataForm'].resetFields()
          if (this.dataForm.userId) {
            this.$http({
              url: this.$http.adornUrl(`/sys/appuser/info/${this.dataForm.userId}`),
              method: 'get',
              params: this.$http.adornParams()
            }).then(({data}) => {
              if (data && data.code === 0) {
                this.dataForm.userNo = data.user.userNo
                this.dataForm.openid = data.user.openid
                this.dataForm.appid = data.user.appid
                this.dataForm.unionid = data.user.unionid
                this.dataForm.username = data.user.username
                this.dataForm.nickname = data.user.nickname
                this.dataForm.mobile = data.user.mobile
                this.dataForm.email = data.user.email
                this.dataForm.password = data.user.password
                this.dataForm.avatarUrl = data.user.avatarUrl
                this.dataForm.gender = data.user.gender
                this.dataForm.country = data.user.country
                this.dataForm.province = data.user.province
                this.dataForm.city = data.user.city
                this.dataForm.createTime = data.user.createTime
                this.dataForm.deleted = data.user.deleted
              }
            })
          }
        })
      },
      // 表单提交
      dataFormSubmit () {
        this.$refs['dataForm'].validate((valid) => {
          if (valid) {
            this.$http({
              url: this.$http.adornUrl(`/sys/appuser/${!this.dataForm.userId ? 'save' : 'update'}`),
              method: 'post',
              data: this.$http.adornData({
                'userId': this.dataForm.userId || undefined,
                'userNo': this.dataForm.userNo,
                'openid': this.dataForm.openid,
                'appid': this.dataForm.appid,
                'unionid': this.dataForm.unionid,
                'username': this.dataForm.username,
                'nickname': this.dataForm.nickname,
                'mobile': this.dataForm.mobile,
                'email': this.dataForm.email,
                'password': this.dataForm.password,
                'avatarUrl': this.dataForm.avatarUrl,
                'gender': this.dataForm.gender,
                'country': this.dataForm.country,
                'province': this.dataForm.province,
                'city': this.dataForm.city,
                'createTime': this.dataForm.createTime,
                'deleted': this.dataForm.deleted
              })
            }).then(({data}) => {
              if (data && data.code === 0) {
                this.$message({
                  message: '操作成功',
                  type: 'success',
                  duration: 1500,
                  onClose: () => {
                    this.visible = false
                    this.$emit('refreshDataList')
                  }
                })
              } else {
                this.$message.error(data.msg)
              }
            })
          }
        })
      }
    }
  }
</script>
