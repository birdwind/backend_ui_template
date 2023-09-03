export default {
  el: {
    transfer: {
      noMatch: '查無資料',
      noData: '無資料'
    },
    table: {
      emptyText: '暫無資料'
    }
  },
  error: {
    usernameNotCorrect: '請輸入正確的帳號',
    passwordNotCorrect: '請輸入正確的密碼'
  },
  system: {
    dashboard: '儀表板',
    info: {
      title: '系統資訊',
      system: '系統',
      version: '版本',
      frontend: '後台系統',
      backend: '資料系統'
    },
    username: '帳號',
    password: '密碼',
    login: '登入',
    title: '管理系統',
    create: '新增',
    cancel: '取消',
    delete: '刪除',
    logged: {
      title: '確認登出',
      content: '您已經登出，您可以取消以留在此頁面，或重新登錄',
      confirm: '重新登錄'
    },
    logout: '登出',
    success: {
      update: '更新成功',
      insert: '新增成功'
    },
    ui: {
      dateTimePicker: {
        startTime: '開始時間',
        endTime: '結束時間'
      },
      table: {
        id: '流水號',
        loading: '請稍等'
      },
      template: {
        changeStatus: '更改狀態',
        status: '狀態',
        memo: '備註'
      },
      dialog: {
        create: '新增',
        update: '修改'
      },
      button: {
        add: '新增',
        edit: '更新',
        search: '搜尋',
        confirm: '確認',
        cancel: '取消',
        export: '導出',
        detail: '詳細'
      }
    }
  },
  common: {
    no: '否',
    yes: '是',
    action: '操作',
    status: {
      enabled: '啟用',
      disabled: '禁用',
      unknown: '尚未定義'
    },
    memo: '備註',
    delete: '刪除',
    createDate: '建立時間',
    updateDate: '最後更新'
  },
  dashboard: {
    btn: {
      play: '播放',
      pip: '子母畫面',
      back: '返回',
      pause: '暫停',
      fullscreen: '全螢幕',
      exitFullscreen: '離開全螢幕'
    },
    settings: {
      autoplay: '自動播放',
      loop: '循環',
      speed: '速度'
    }
  },
  rules: {
    required: '這個項目為必填',
    formatNotCorrect: '格式不符合',
    eightToTwentyLength: '長度為8~20個字元'
  },
  options: {
    banned: {
      yes: '封禁',
      no: '解封'
    }
  },
  user: {
    management: '用戶管理',
    title: '用戶列表',
    uid: 'UID',
    userId: '用戶ID',
    avatar: '頭像',
    account: '帳號',
    nickname: '昵稱',
    online: '在線',
    createTime: '註冊時間',
    lastLogin: '最後登入時間',
    lastLoginChannel: '最後登入渠道',
    lastActive: '最後活躍時間',
    ban: '封禁',
    unban: '解封',
    kick: '下線',
    internal: {
      management: '內置帳號管理'
    },
    contacts: {
      management: '用戶聯絡人管理',
      name: '通訊名',
      phone: '手機號',
      email: 'Email'
    },
    banned: {
      management: '封禁記錄',
      createTime: '封禁時間',
      status: '封禁狀態'
    }
  },
  fund: {
    management: '資金管理',
    title: '資金列表',
    record: '資金明細',
    account: '帳號',
    symbolType: {
      name: '幣種類型',
      currency: '法幣',
      virtual: '虛擬貨幣'
    },
    symbol: '幣種',
    amount: '金額',
    direction: {
      name: '動作',
      recharge: '充值',
      withdraw: '提款'
    },
    balance: '餘額',
    createDate: '建立時間'
  },
  banner: {
    management: '廣告管理',
    title: '廣告列表',
    table: {
      title: '標題',
      link: '連結',
      icon: '圖標',
      type: '跳轉類型',
      status: '狀態'
    },
    type: {
      nothing: '無',
      internal: '內部',
      outside: '外部'
    }
  },
  brand: {
    management: '品牌管理',
    title: '品牌列表',
    protocol: '通訊方式',
    domain: 'Domain',
    promotion: {
      pc: 'PC',
      android: 'Android',
      ios: 'IOS',
      imgPlaySecond: '圖片播放秒數',
      imgSkipSecond: '圖片跳過秒數',
      imgUrl: '圖片',
      contactsEnable: '通訊錄啟用'
    },
    banner: {
      title: '廣告',
      intervalSecond: '間隔秒數',
      autoEnable: '自動啟用',
      enable: '啟用'
    },
    official: {
      title: '官方號',
      avatar: '頭貼',
      nickname: '昵稱',
      welcome: '歡迎語'
    },
    redEnvelope: {
      title: '紅包',
      enable: '啟用',
      sendEnable: '發送啟用',
      receiveEnable: '接收啟用',
      sendMinQuantity: '發送最小數量',
      sendMaxQuantity: '發送最大數量'
    }
  },
  group: {
    title: '群組',
    management: '群組管理',
    id: '群組ID',
    groupName: '群名稱',
    avatar: '群頭像',
    peopleNumber: '群人數',
    createUserId: '創建者ID',
    createUserName: '創建者名稱',
    ownerUserId: '群主用戶ID',
    ownerUserName: '群主名稱',
    createTime: '創建時間',
    isForbidAdd: '添加好友',
    forbidSpeakFlag: '全群禁言',
    delFlag: '封禁狀態',
    status: '群狀態'
  },
  permission: {
    management: '權限管理'
  },
  menu: {
    title: '菜單'
  },
  role: {
    title: '角色管理',
    name: '名稱',
    status: '狀態',
    level: '等級',
    fullPath: '代理階層路徑',
    remark: '備註',
    createTime: '創建時間',
    acl: '權限',
    parent: '父角色'
  },
  whiteList: {
    title: '白名單管理',
    ip: 'IP'
  },
  operation: {
    title: '操作日誌',
    userId: '用戶ID',
    account: '用戶帳號',
    code: '編碼',
    request: '請求',
    change: '變更',
    remark: '備註'
  },
  admin: {
    title: '後台用戶管理',
    nickname: '呢稱',
    username: '帳號',
    level: '用戶層級',
    status: '狀態',
    createTime: '創建時間',
    updateTime: '最後更新時間',
    levelOption: {
      management: '管理員',
      brand: '商戶'
    },
    roleId: '角色',
    password: '密碼',
    newPassword: '新密碼',
    confirmPassword: '確認新密碼',
    email: '信箱',
    phone: '手機號',
    resetPassword: '重置密碼',
    kick: '踢除'
  }
}
