import i18n from '@/lang'

export const ActionType = {
  ADD: 'add',
  DELETE: 'del',
  UPDATE: 'update'
}

export const DialogType = {
  Create: 0,
  Update: 1
}

export const Status = {
  Disabled: 0,
  Enabled: 1
}

// export const UserLevel = {
//   Merchant: -2,
//   SuperAdmin: -1,
//   GeneralAgent: 0
// }

// 改成只有兩種
export const UserLevel = {
  SuperAdmin: 1,
  NormalAdmin: 2,
  BrandAdmin: 3,
  GeneralAgent: 4
}

export const AccountStatus = {
  Disabled: 0,
  Enabled: 1,
  ReachedLimit: 2,
  UnderRiskControl: 3,
  Suspended: 4,
  Cooling: 5,
  CoolingAmount: 6
}

export const CatchMode = {
  WebBrowser: 0,
  Selenium: 1
}

export const BankCardStatus = {
  Disabled: 0,
  Enabled: 1,
  ReachedLimit: 2,
  UnderRiskControl: 3,
  Suspended: 4,
  Cooling: 5,
  CoolingAmount: 6
}

export const BankCardType = {
  ReceiptCard: 0,
  TransferCard: 1,
  SafeCard: 2,
  PaymentCard: 3
}

export const SettlementClosingDay = {
  D0: 0,
  D1: 1,
  T0: 2,
  T1: 3
}

export const NotifyStatus = {
  Created: 0,
  Notifying: 1,
  Succeeded: 2,
  Failed: 3,
  NotifyError: 4
}

export const RiskStatus = {
  LoggedOut: 0,
  LoggedIn: 1,
  LoggingIn: 2
}

export const AccountChannelTypeGroup = {
  Pc: 'PC',
  Wap: 'WAP'
}

export const AccountChannelType = {
  Pc: '_PC',
  WapQr: 'WAP_QR',
  FaceQr: 'FACE_QR',
  Wap: '_WAP',
  Face: 'FACE',
  Auth: 'AUTH'
}

export const ChannelCodeWithoutAccount = {
  Withdraw: 'WITHDRAW'
}

export const ChannelCode = {
  AliPay: 'ALIPAY',
  WeChant: 'WECHAT',
  PddAliPay: 'PDD_ALIPAY',
  PddWeChat: 'PDD_WECHAT',
  BankGate: 'BANKGATE',
  BankCard: 'BANKCARD',
  Withdraw: 'WITHDRAW'
}

export const AccountCode = {
  AliPay: {
    AliPayEnterprise: 'ALIPAY_ENTERPRISE',
    Pdd: 'PDD',
    Kuaijie: 'KUAIJIE',
    Lepay: 'LEPAY'
  },
  WeChant: {
    Pdd: 'PDD',
    Kuaijie: 'KUAIJIE'
  },
  PddAliPay: {
    ZifuPdd: 'ZIFU_PDD'
  },
  PddWeChat: {
    ZifuPdd: 'ZIFU_PDD'
  },
  BankGate: {
    WyPay: 'WYPAY'
  },
  BankCard: {
    Inner: 'INNER'
  }
}

export const AccountCodeList = [
  { channelCode: ChannelCode.AliPay, accountCode: AccountCode.AliPay.AliPayEnterprise },
  { channelCode: ChannelCode.AliPay, accountCode: AccountCode.AliPay.Pdd },
  { channelCode: ChannelCode.AliPay, accountCode: AccountCode.AliPay.Kuaijie },
  { channelCode: ChannelCode.AliPay, accountCode: AccountCode.AliPay.Lepay },
  { channelCode: ChannelCode.WeChant, accountCode: AccountCode.WeChant.Pdd },
  { channelCode: ChannelCode.WeChant, accountCode: AccountCode.WeChant.Kuaijie },
  { channelCode: ChannelCode.PddAliPay, accountCode: AccountCode.PddAliPay.ZifuPdd },
  { channelCode: ChannelCode.PddWeChat, accountCode: AccountCode.PddWeChat.ZifuPdd },
  { channelCode: ChannelCode.BankGate, accountCode: AccountCode.BankGate.WyPay },
  { channelCode: ChannelCode.BankCard, accountCode: AccountCode.BankCard.Inner }
]

export const FoundToCofferType = {
  AlipayToAlipay: 0,
  AlipayToBankCard: 1
}

export const WithdrawChannelUrlType = {
  CreateOrder: 0,
  GetOrder: 1,
  GetBalance: 2
}

export const SecurityType = {
  CreateOrder: 0,
  UserLogin: 1,
  WithdrawCardNo: 2
}

export const RiskConfigType = {
  Money: 0,
  Number: 1,
  Percentage: 2,
  Json: 3
}

export const PayOrderStatus = {
  Created: 0,
  NotYetOpenPage: 1,
  OpenedPage: 2,
  ScannedQrCode: 3,
  Paid: 4,
  Completed: 5,
  ClosedOnNotYetOpenPage: 6,
  ClosedOnOpenPage: 7,
  ClosedOnScannedQrCode: 8,
  ClosedOnCreate: 9,
  Fail: 13
}

export const WithdrawOrderStatus = {
  Created: 0,
  MerchantConfirmed: 1,
  Pending: 2,
  Processing: 3,
  Withdrawing: 4,
  Withdrawn: 5,
  Completed: 6,
  FailedOnMerchantConfirm: -1,
  FailedOnProcessing: -2,
  FailedOnWithdrawing: -3,
  FailedOnSign: -4
}

export const FoundToMerchantOrderStatus = {
  Created: 0,
  Finished: 1,
  Canceled: 2
}

export const RiskConfig = [
  {
    key: 'ALIPAY_COOLING_AMOUNT',
    name: i18n.t('riskConfig.keys.alipayCoolingAmount'),
    type: RiskConfigType.Money
  },
  {
    key: 'ACCOUNT_SELECTING_TODAY_LEAST_AMOUNT',
    name: i18n.t('riskConfig.keys.accountSelectingTodayLeastAmount'),
    type: RiskConfigType.Number
  },
  {
    key: 'ORDER_SUCCESS_RATE',
    name: i18n.t('riskConfig.keys.orderSuccessRate'),
    type: RiskConfigType.Percentage
  },
  {
    key: 'PAID_SUCCESS_RATE',
    name: i18n.t('riskConfig.keys.paidSuccessRate'),
    type: RiskConfigType.Percentage
  },
  {
    key: 'BANKGATE_WYPAY',
    name: i18n.t('riskConfig.keys.bankGateWyPay'),
    type: RiskConfigType.Json
  },
  {
    key: 'ALIPAY_CLIENT_IP_VERIFICATION',
    name: i18n.t('riskConfig.keys.clientIpVerification'),
    type: RiskConfigType.Number
  },
  {
    key: 'BAN_REQUEST_IP_DIFFERENT_FROM_CLIENT_IP',
    name: i18n.t('riskConfig.keys.banRequestIpDifferentFromClientIp'),
    type: RiskConfigType.Number
  }
]

export const Permission = {
  BRAND_MANAGEMENT: 'BRAND_MANAGEMENT',
  BRAND_CONFIG_INFO: 'BRAND_CONFIG_INFO',
  BRAND_CONFIG_SET: 'BRAND_CONFIG_SET',
  BRAND_BANNER: 'BRAND_BANNER',
  BRAND_BANNER_LIST: 'BRAND_BANNER_LIST',
  BRAND_BANNER_ADD: 'BRAND_BANNER_ADD',
  BRAND_BANNER_EDIT: 'BRAND_BANNER_EDIT',
  BRAND_BANNER_DELETE: 'BRAND_BANNER_DELETE',
  BRAND_LINK: 'BRAND_LINK',
  BRAND_LINK_LIST: 'BRAND_LINK_LIST',
  BRAND_LINK_ADD: 'BRAND_LINK_ADD',
  BRAND_LINK_EDIT: 'BRAND_LINK_EDIT',
  BRAND_LINK_DELETE: 'BRAND_LINK_DELETE',
  BRAND_AVATAR: 'BRAND_AVATAR',
  BRAND_AVATAR_LIST: 'BRAND_AVATAR_LIST',
  BRAND_AVATAR_ADD: 'BRAND_AVATAR_ADD',
  BRAND_AVATAR_EDIT: 'BRAND_AVATAR_EDIT',
  BRAND_AVATAR_DELETE: 'BRAND_AVATAR_DELETE',
  PERMISSION_MANAGEMENT: 'PERMISSION_MANAGEMENT',
  PERMISSION_ACL: 'PERMISSION_ACL',
  PERMISSION_ACL_LIST: 'PERMISSION_ACL_LIST',
  PERMISSION_ROLE: 'PERMISSION_ROLE',
  PERMISSION_ROLE_LIST: 'PERMISSION_ROLE_LIST',
  PERMISSION_ROLE_ADD: 'PERMISSION_ROLE_ADD',
  PERMISSION_ROLE_EDIT: 'PERMISSION_ROLE_EDIT',
  PERMISSION_ROLE_DELETE: 'PERMISSION_ROLE_DELETE',
  PERMISSION_USER: 'PERMISSION_USER',
  PERMISSION_USER_LIST: 'PERMISSION_USER_LIST',
  PERMISSION_USER_ADD: 'PERMISSION_USER_ADD',
  PERMISSION_USER_EDIT: 'PERMISSION_USER_EDIT',
  PERMISSION_USER_PWD_RESET: 'PERMISSION_USER_PWD_RESET',
  PERMISSION_USER_ONLINE_KICK: 'PERMISSION_USER_ONLINE_KICK',
  PERMISSION_WHITE: 'PERMISSION_WHITE',
  PERMISSION_WHITE_LIST: 'PERMISSION_WHITE_LIST',
  PERMISSION_WHITE_ADD: 'PERMISSION_WHITE_ADD',
  PERMISSION_WHITE_EDIT: 'PERMISSION_WHITE_EDIT',
  PERMISSION_WHITE_DELETE: 'PERMISSION_WHITE_DELETE',
  PERMISSION_OPERATIONLOG: 'PERMISSION_OPERATIONLOG',
  PERMISSION_OPERATIONLOG_LIST: 'PERMISSION_OPERATIONLOG_LIST',
  PERMISSION_BIZLOG: 'PERMISSION_BIZLOG',
  PERMISSION_BIZLOG_LIST: 'PERMISSION_BIZLOG_LIST',
  USER_MANAGEMENT: 'USER_MANAGEMENT',
  USER: 'USER',
  USER_LIST: 'USER_LIST',
  USER_BAN: 'USER_BAN',
  USER_BAN_LIST: 'USER_BAN_LIST',
  USER_KICK: 'USER_KICK',
  USER_INTERNAL: 'USER_INTERNAL',
  USER_INTERNAL_LIST: 'USER_INTERNAL_LIST',
  USER_INTERNAL_ADD: 'USER_INTERNAL_ADD',
  USER_INTERNAL_EDIT: 'USER_INTERNAL_EDIT',
  USER_INTERNAL_PWD_RESET: 'USER_INTERNAL_PWD_RESET',
  USER_CONTACTS: 'USER_CONTACTS',
  USER_CONTACTS_LIST: 'USER_CONTACTS_LIST',
  FUND_MANAGEMENT: 'FUND_MANAGEMENT',
  FUND_RECHARGE: 'FUND_RECHARGE',
  FUND_RECHARGE_LIST: 'FUND_RECHARGE_LIST',
  FUND_RECHARGE_MANUAL: 'FUND_RECHARGE_MANUAL',
  FUND_WITHDRAW: 'FUND_WITHDRAW',
  FUND_WITHDRAW_LIST: 'FUND_WITHDRAW_LIST',
  FUND_WITHDRAW_MANUAL: 'FUND_WITHDRAW_MANUAL',
  FUND_RECORD: 'FUND_RECORD',
  FUND_RECORD_LIST: 'FUND_RECORD_LIST',
  FUND_RECORD_EXPORT: 'FUND_RECORD_EXPORT',
  GROUP_MANAGEMENT: 'GROUP_MANAGEMENT',
  GROUP: 'GROUP',
  GROUP_LIST: 'GROUP_LIST',
  LINK_MANAGEMENT: 'LINK_MANAGEMENT',
  LINK: 'LINK',
  LINK_LIST: 'LINK_LIST',
  LINK_ADD: 'LINK_ADD',
  LINK_EDIT: 'LINK_EDIT',
  LINK_DELETE: 'LINK_DELETE',
  BANNER_MANAGEMENT: 'BANNER_MANAGEMENT',
  BANNER: 'BANNER',
  BANNER_LIST: 'BANNER_LIST',
  BANNER_ADD: 'BANNER_ADD',
  BANNER_EDIT: 'BANNER_EDIT',
  BANNER_DELETE: 'BANNER_DELETE',
  REPORT_MANAGEMENT: 'REPORT_MANAGEMENT',
  REPORT_USER_STATISTICS: 'REPORT_USER_STATISTICS',
  REPORT_USER_STATISTICS_LIST: 'REPORT_USER_STATISTICS_LIST',
  REPORT_DAILY: 'REPORT_DAILY',
  REPORT_DAILY_LIST: 'REPORT_DAILY_LIST',
  REPORT_DAILY_EXPORT: 'REPORT_DAILY_EXPORT',
  REPORT_PROFITLOSS: 'REPORT_PROFITLOSS',
  REPORT_PROFITLOSS_LIST: 'REPORT_PROFITLOSS_LIST',
  REPORT_PROFITLOSS_EXPORT: 'REPORT_PROFITLOSS_EXPORT',
  COMPLAINT_MANAGEMENT: 'COMPLAINT_MANAGEMENT',
  COMPLAINT: 'COMPLAINT',
  FEEDBACK: 'FEEDBACK'
}

// 對應 db 設定參數
export const DayStatus = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6
}

// 對應 db 設定參數
export const ServiceFeeType = {
  TypeA: 0,
  TypeB: 1
}

// 連線狀態
export const ConnStatus = {
  Good: 'GOOD',
  Timeout: 'TIMEOUT',
  Error: 'ERROR'
}

export const CookiesKey = {
  TokenKey: 'Admin-Token',
  Auth: 'Auth'
}
