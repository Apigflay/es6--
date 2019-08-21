var app = getApp();
// var person_uuid = app.globalData.person_uuid;
// var depart_uuid = app.globalData.depart_uuid;
// var user_name = app.globalData.user_name;
// var fsocial_depart_uuid = app.globalData.depart_uuid;
// var person_uuid = app.globalData.person_uuid;
var attachmentlist = [], file = [], newallData = [], personarray = [];
var text = "", data = "", latitude = "", longitude = "", fattach_type = "", fattach_name = "", fattach_link = "", fmonitor_type = "G4403", fdevice_maint_uuid1 = "", fdevice_maint_uuid2 = "", fdevice_maint_uuid3 = "", fdevice_maint_uuid4 = "";
var attach = {}, personsarr = {};
//user_infor
// var user_infor = wx.getStorageSync('user_infor');
Page({
  data: {
    info:"",
    point_address:'',
    tempFilePaths: [],
    flag_img: true,
    num: 0,
    url: '',
    fpatrolscheme_uuid:'',
    fproject_uuid:'',
    flag_num: true,
    fpatrol_uuid:'',
    fpatrol_code:'',
    checkid: '',
    checkname:'',
    val:'',
    text1:'',
    text2:'',
    attachment:'',
    images1: [],
    images2:[] ,
    user_infor:'',
    urlname: app.globalData.imgURL
  },
  getInput: function (e) {
    text = e.detail.value;
    this.setData({
      text: text
    })
  },
  //图片上传本地
  uploadImg: function (e) {
    var that = this;
    file = that.data.tempFilePaths;
    wx.chooseImage({
      count: 3 - file.length, // 最多可以选择的图片张数，默认3
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function (res) {
        for (var i = 0; i < res.tempFilePaths.length; i++) {
          file.push(res.tempFilePaths[i]);
          that.data.num = that.data.num + 1;
          console.log(that.data.num);
          if (that.data.num == 3) {
            that.setData({
              flag_num: false
            })
          }
        }
        wx.uploadFile({
          url: app.globalData.BaseURL + '/wdk?action=wdk.public&method=multiattachmentupload',
          filePath: res.tempFilePaths[0],
          name: