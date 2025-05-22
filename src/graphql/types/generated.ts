export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  AWSDateTime: { input: any; output: any; }
  AWSURL: { input: any; output: any; }
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  accessToken?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  idToken?: Maybe<Scalars['String']['output']>;
  message: Scalars['String']['output'];
  refreshToken?: Maybe<Scalars['String']['output']>;
};

export type BaseCartLine = {
  __typename?: 'BaseCartLine';
  cost: CartLineCost;
  id: Scalars['ID']['output'];
  merchandise: Merchandise;
  quantity: Scalars['Int']['output'];
};

export type Cart = {
  __typename?: 'Cart';
  buyerIdentity?: Maybe<CartBuyerIdentity>;
  checkoutUrl?: Maybe<Scalars['AWSURL']['output']>;
  cost: CartCost;
  createdAt: Scalars['AWSDateTime']['output'];
  delivery: CartDelivery;
  id: Scalars['ID']['output'];
  lines: Array<Maybe<BaseCartLine>>;
  note?: Maybe<Scalars['String']['output']>;
  totalQuantity: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['AWSDateTime']['output']>;
};

export type CartAddress = {
  __typename?: 'CartAddress';
  CartDeliveryAddress?: Maybe<CartDeliveryAddress>;
};

export type CartAddressInput = {
  copyFromCustomerAddressId?: InputMaybe<Scalars['ID']['input']>;
  deliveryAddress?: InputMaybe<CartDeliveryAddressInput>;
};

export type CartBuyerIdentity = {
  __typename?: 'CartBuyerIdentity';
  countryCode?: Maybe<CountryCode>;
  customer?: Maybe<Customer>;
  email?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
};

export type CartBuyerIdentityInput = {
  countryCode?: InputMaybe<CountryCode>;
  customerAccessToken?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type CartCost = {
  __typename?: 'CartCost';
  checkoutChargeAmount: Money;
  subtotalAmount: Money;
  subtotalAmountEstimated: Scalars['Boolean']['output'];
  totalAmount?: Maybe<Money>;
  totalAmountEstimated: Scalars['Boolean']['output'];
};

export type CartCreatePayload = {
  __typename?: 'CartCreatePayload';
  cart?: Maybe<Cart>;
  userErrors?: Maybe<Array<CartUserError>>;
  warnings?: Maybe<Array<CartWarning>>;
};

export type CartDelivery = {
  __typename?: 'CartDelivery';
  addresses: Array<CartSelectableAddress>;
};

export type CartDeliveryAddress = {
  __typename?: 'CartDeliveryAddress';
  address1?: Maybe<Scalars['String']['output']>;
  address2?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Scalars['String']['output']>;
  countryCode?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  zip?: Maybe<Scalars['String']['output']>;
};

export type CartDeliveryAddressInput = {
  address1?: InputMaybe<Scalars['String']['input']>;
  address2?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  countryCode?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  zip?: InputMaybe<Scalars['String']['input']>;
};

export type CartDeliveryInput = {
  addresses?: InputMaybe<Array<CartSelectableAddressInput>>;
};

export enum CartErrorCode {
  AlreadyHasLineItem = 'ALREADY_HAS_LINE_ITEM',
  CheckoutNotSupported = 'CHECKOUT_NOT_SUPPORTED',
  InvalidGiftCard = 'INVALID_GIFT_CARD',
  InvalidLineItemId = 'INVALID_LINE_ITEM_ID',
  LineItemNotFound = 'LINE_ITEM_NOT_FOUND',
  MaxLimitReached = 'MAX_LIMIT_REACHED',
  MinQuantityRequired = 'MIN_QUANTITY_REQUIRED',
  QuantityTooHigh = 'QUANTITY_TOO_HIGH',
  RequiredFieldMissing = 'REQUIRED_FIELD_MISSING',
  UnavailableDiscountCode = 'UNAVAILABLE_DISCOUNT_CODE',
  UnavailableProduct = 'UNAVAILABLE_PRODUCT',
  UnavailableShippingOption = 'UNAVAILABLE_SHIPPING_OPTION',
  UnknownError = 'UNKNOWN_ERROR'
}

export type CartInput = {
  buyerIdentity?: InputMaybe<CartBuyerIdentityInput>;
  delivery?: InputMaybe<CartDeliveryInput>;
  lines?: InputMaybe<Array<CartLineInput>>;
  note?: InputMaybe<Scalars['String']['input']>;
};

export type CartLineCost = {
  __typename?: 'CartLineCost';
  amountPerQuantity?: Maybe<Money>;
  compareAtAmountPerQuantity?: Maybe<Money>;
  subtotalAmount?: Maybe<Money>;
  totalAmount?: Maybe<Money>;
};

export type CartLineInput = {
  merchandiseId: Scalars['ID']['input'];
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

export type CartLineUpdateInput = {
  id: Scalars['ID']['input'];
  merchandiseId?: InputMaybe<Scalars['ID']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

export type CartLinesAddPayload = {
  __typename?: 'CartLinesAddPayload';
  cart?: Maybe<Cart>;
  userErrors?: Maybe<Array<CartUserError>>;
  warnings?: Maybe<Array<CartWarning>>;
};

export type CartLinesRemovePayload = {
  __typename?: 'CartLinesRemovePayload';
  cart?: Maybe<Cart>;
  userErrors?: Maybe<Array<CartUserError>>;
  warnings?: Maybe<Array<CartWarning>>;
};

export type CartLinesUpdatePayload = {
  __typename?: 'CartLinesUpdatePayload';
  cart?: Maybe<Cart>;
  userErrors?: Maybe<Array<Maybe<CartUserError>>>;
  warnings?: Maybe<Array<Maybe<CartWarning>>>;
};

export type CartSelectableAddress = {
  __typename?: 'CartSelectableAddress';
  address: CartAddress;
  id: Scalars['ID']['output'];
  oneTimeUse: Scalars['Boolean']['output'];
  selected: Scalars['Boolean']['output'];
};

export type CartSelectableAddressInput = {
  address: CartAddressInput;
  oneTimeUse?: InputMaybe<Scalars['Boolean']['input']>;
  selected?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CartUserError = {
  __typename?: 'CartUserError';
  code?: Maybe<CartErrorCode>;
  field?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  message?: Maybe<Scalars['String']['output']>;
};

export type CartWarning = {
  __typename?: 'CartWarning';
  code: CartWarningCode;
  message: Scalars['String']['output'];
  target: Scalars['ID']['output'];
};

export enum CartWarningCode {
  DuplicateDeliveryAddress = 'DUPLICATE_DELIVERY_ADDRESS',
  MerchandiseNotEnoughStock = 'MERCHANDISE_NOT_ENOUGH_STOCK',
  MerchandiseOutOfStock = 'MERCHANDISE_OUT_OF_STOCK',
  PaymentsGiftCardsUnavailable = 'PAYMENTS_GIFT_CARDS_UNAVAILABLE'
}

export type Category = {
  __typename?: 'Category';
  id?: Maybe<Scalars['ID']['output']>;
};

export type Collection = {
  __typename?: 'Collection';
  createdAt?: Maybe<Scalars['AWSDateTime']['output']>;
  descriptionHtml?: Maybe<Scalars['String']['output']>;
  handle?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Image>;
  products?: Maybe<ProductConnection>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['AWSDateTime']['output']>;
};


export type CollectionProductsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<SortInput>>>;
};

export type CollectionConnection = {
  __typename?: 'CollectionConnection';
  nodes?: Maybe<Array<Maybe<Collection>>>;
  pageInfo: PageInfo;
};

export enum CountryCode {
  Ac = 'AC',
  Ad = 'AD',
  Ae = 'AE',
  Af = 'AF',
  Ag = 'AG',
  Ai = 'AI',
  Al = 'AL',
  Am = 'AM',
  Ao = 'AO',
  Ar = 'AR',
  As = 'AS',
  At = 'AT',
  Au = 'AU',
  Aw = 'AW',
  Ax = 'AX',
  Az = 'AZ',
  Ba = 'BA',
  Bb = 'BB',
  Bd = 'BD',
  Be = 'BE',
  Bf = 'BF',
  Bg = 'BG',
  Bh = 'BH',
  Bi = 'BI',
  Bj = 'BJ',
  Bl = 'BL',
  Bm = 'BM',
  Bn = 'BN',
  Bo = 'BO',
  Bq = 'BQ',
  Br = 'BR',
  Bs = 'BS',
  Bt = 'BT',
  Bv = 'BV',
  Bw = 'BW',
  By = 'BY',
  Bz = 'BZ',
  Ca = 'CA',
  Cc = 'CC',
  Cd = 'CD',
  Cf = 'CF',
  Cg = 'CG',
  Ch = 'CH',
  Ci = 'CI',
  Ck = 'CK',
  Cl = 'CL',
  Cm = 'CM',
  Cn = 'CN',
  Co = 'CO',
  Cr = 'CR',
  Cu = 'CU',
  Cv = 'CV',
  Cw = 'CW',
  Cx = 'CX',
  Cy = 'CY',
  Cz = 'CZ',
  De = 'DE',
  Dj = 'DJ',
  Dk = 'DK',
  Dm = 'DM',
  Do = 'DO',
  Dz = 'DZ',
  Ec = 'EC',
  Ee = 'EE',
  Eg = 'EG',
  Eh = 'EH',
  Er = 'ER',
  Es = 'ES',
  Et = 'ET',
  Fi = 'FI',
  Fj = 'FJ',
  Fk = 'FK',
  Fm = 'FM',
  Fo = 'FO',
  Fr = 'FR',
  Ga = 'GA',
  Gb = 'GB',
  Gd = 'GD',
  Ge = 'GE',
  Gf = 'GF',
  Gg = 'GG',
  Gh = 'GH',
  Gi = 'GI',
  Gl = 'GL',
  Gm = 'GM',
  Gn = 'GN',
  Gp = 'GP',
  Gq = 'GQ',
  Gr = 'GR',
  Gt = 'GT',
  Gu = 'GU',
  Gw = 'GW',
  Gy = 'GY',
  Hk = 'HK',
  Hm = 'HM',
  Hn = 'HN',
  Hr = 'HR',
  Ht = 'HT',
  Hu = 'HU',
  Id = 'ID',
  Ie = 'IE',
  Il = 'IL',
  Im = 'IM',
  In = 'IN',
  Io = 'IO',
  Iq = 'IQ',
  Ir = 'IR',
  Is = 'IS',
  It = 'IT',
  Je = 'JE',
  Jm = 'JM',
  Jo = 'JO',
  Jp = 'JP',
  Ke = 'KE',
  Kg = 'KG',
  Kh = 'KH',
  Ki = 'KI',
  Km = 'KM',
  Kn = 'KN',
  Kp = 'KP',
  Kr = 'KR',
  Kw = 'KW',
  Ky = 'KY',
  Kz = 'KZ',
  La = 'LA',
  Lb = 'LB',
  Lc = 'LC',
  Li = 'LI',
  Lk = 'LK',
  Lr = 'LR',
  Ls = 'LS',
  Lt = 'LT',
  Lu = 'LU',
  Lv = 'LV',
  Ly = 'LY',
  Ma = 'MA',
  Mc = 'MC',
  Md = 'MD',
  Me = 'ME',
  Mf = 'MF',
  Mg = 'MG',
  Mh = 'MH',
  Mk = 'MK',
  Ml = 'ML',
  Mm = 'MM',
  Mn = 'MN',
  Mo = 'MO',
  Mp = 'MP',
  Mq = 'MQ',
  Mr = 'MR',
  Ms = 'MS',
  Mt = 'MT',
  Mu = 'MU',
  Mv = 'MV',
  Mw = 'MW',
  Mx = 'MX',
  My = 'MY',
  Mz = 'MZ',
  Na = 'NA',
  Nc = 'NC',
  Ne = 'NE',
  Nf = 'NF',
  Ng = 'NG',
  Ni = 'NI',
  Nl = 'NL',
  No = 'NO',
  Np = 'NP',
  Nr = 'NR',
  Nu = 'NU',
  Nz = 'NZ',
  Om = 'OM',
  Pa = 'PA',
  Pe = 'PE',
  Pf = 'PF',
  Pg = 'PG',
  Ph = 'PH',
  Pk = 'PK',
  Pl = 'PL',
  Pm = 'PM',
  Pn = 'PN',
  Pr = 'PR',
  Pt = 'PT',
  Pw = 'PW',
  Py = 'PY',
  Qa = 'QA',
  Re = 'RE',
  Ro = 'RO',
  Rs = 'RS',
  Ru = 'RU',
  Rw = 'RW',
  Sa = 'SA',
  Sb = 'SB',
  Sc = 'SC',
  Sd = 'SD',
  Se = 'SE',
  Sg = 'SG',
  Sh = 'SH',
  Si = 'SI',
  Sj = 'SJ',
  Sk = 'SK',
  Sl = 'SL',
  Sm = 'SM',
  Sn = 'SN',
  So = 'SO',
  Sr = 'SR',
  Ss = 'SS',
  St = 'ST',
  Sv = 'SV',
  Sx = 'SX',
  Sy = 'SY',
  Sz = 'SZ',
  Tc = 'TC',
  Td = 'TD',
  Tf = 'TF',
  Tg = 'TG',
  Th = 'TH',
  Tj = 'TJ',
  Tk = 'TK',
  Tl = 'TL',
  Tm = 'TM',
  Tn = 'TN',
  To = 'TO',
  Tr = 'TR',
  Tt = 'TT',
  Tv = 'TV',
  Tz = 'TZ',
  Ua = 'UA',
  Ug = 'UG',
  Um = 'UM',
  Us = 'US',
  Uy = 'UY',
  Uz = 'UZ',
  Va = 'VA',
  Vc = 'VC',
  Ve = 'VE',
  Vg = 'VG',
  Vi = 'VI',
  Vn = 'VN',
  Vu = 'VU',
  Wf = 'WF',
  Ws = 'WS',
  Ye = 'YE',
  Yt = 'YT',
  Za = 'ZA',
  Zm = 'ZM',
  Zw = 'ZW'
}

export enum CurrencyCode {
  Aed = 'AED',
  Afn = 'AFN',
  All = 'ALL',
  Amd = 'AMD',
  Ang = 'ANG',
  Aoa = 'AOA',
  Ars = 'ARS',
  Aud = 'AUD',
  Awg = 'AWG',
  Azn = 'AZN',
  Bam = 'BAM',
  Bbd = 'BBD',
  Bdt = 'BDT',
  Bgn = 'BGN',
  Bhd = 'BHD',
  Bnd = 'BND',
  Bob = 'BOB',
  Brl = 'BRL',
  Bsd = 'BSD',
  Btn = 'BTN',
  Bwp = 'BWP',
  Byr = 'BYR',
  Bzd = 'BZD',
  Cad = 'CAD',
  Cdf = 'CDF',
  Chf = 'CHF',
  Clp = 'CLP',
  Cny = 'CNY',
  Cop = 'COP',
  Crc = 'CRC',
  Czk = 'CZK',
  Dkk = 'DKK',
  Dop = 'DOP',
  Dzd = 'DZD',
  Egp = 'EGP',
  Etb = 'ETB',
  Eur = 'EUR',
  Fjd = 'FJD',
  Gbp = 'GBP',
  Gel = 'GEL',
  Ghs = 'GHS',
  Gmd = 'GMD',
  Gtq = 'GTQ',
  Gyd = 'GYD',
  Hkd = 'HKD',
  Hnl = 'HNL',
  Hrk = 'HRK',
  Htg = 'HTG',
  Huf = 'HUF',
  Idr = 'IDR',
  Ils = 'ILS',
  Inr = 'INR',
  Isk = 'ISK',
  Jep = 'JEP',
  Jmd = 'JMD',
  Jod = 'JOD',
  Jpy = 'JPY',
  Kes = 'KES',
  Kgs = 'KGS',
  Khr = 'KHR',
  Kmf = 'KMF',
  Krw = 'KRW',
  Kwd = 'KWD',
  Kyd = 'KYD',
  Kzt = 'KZT',
  Lak = 'LAK',
  Lbp = 'LBP',
  Lkr = 'LKR',
  Lrd = 'LRD',
  Lsl = 'LSL',
  Ltl = 'LTL',
  Lvl = 'LVL',
  Mad = 'MAD',
  Mdl = 'MDL',
  Mga = 'MGA',
  Mkd = 'MKD',
  Mmk = 'MMK',
  Mnt = 'MNT',
  Mop = 'MOP',
  Mur = 'MUR',
  Mvr = 'MVR',
  Mwk = 'MWK',
  Mxn = 'MXN',
  Myr = 'MYR',
  Mzn = 'MZN',
  Nad = 'NAD',
  Ngn = 'NGN',
  Nio = 'NIO',
  Nok = 'NOK',
  Npr = 'NPR',
  Nzd = 'NZD',
  Omr = 'OMR',
  Pen = 'PEN',
  Pgk = 'PGK',
  Php = 'PHP',
  Pkr = 'PKR',
  Pln = 'PLN',
  Pyg = 'PYG',
  Qar = 'QAR',
  Ron = 'RON',
  Rsd = 'RSD',
  Rub = 'RUB',
  Rwf = 'RWF',
  Sar = 'SAR',
  Sbd = 'SBD',
  Scr = 'SCR',
  Sdg = 'SDG',
  Sek = 'SEK',
  Sgd = 'SGD',
  Srd = 'SRD',
  Std = 'STD',
  Syp = 'SYP',
  Thb = 'THB',
  Tmt = 'TMT',
  Tnd = 'TND',
  Try = 'TRY',
  Ttd = 'TTD',
  Twd = 'TWD',
  Tzs = 'TZS',
  Uah = 'UAH',
  Ugx = 'UGX',
  Usd = 'USD',
  Uyu = 'UYU',
  Uzs = 'UZS',
  Vef = 'VEF',
  Vnd = 'VND',
  Vuv = 'VUV',
  Wst = 'WST',
  Xaf = 'XAF',
  Xcd = 'XCD',
  Xof = 'XOF',
  Xpf = 'XPF',
  Yer = 'YER',
  Zar = 'ZAR',
  Zmw = 'ZMW'
}

export type Customer = {
  __typename?: 'Customer';
  acceptsMarketing?: Maybe<Scalars['Boolean']['output']>;
  addresses?: Maybe<Array<MailingAddress>>;
  createdAt?: Maybe<Scalars['AWSDateTime']['output']>;
  defaultAddress?: Maybe<MailingAddress>;
  displayName?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type CustomerAddressCreatePayload = {
  __typename?: 'CustomerAddressCreatePayload';
  customerAddress?: Maybe<MailingAddress>;
  customerUserErrors: Array<CustomerUserError>;
};

export type CustomerAddressDeletePayload = {
  __typename?: 'CustomerAddressDeletePayload';
  customerUserErrors: Array<CustomerUserError>;
  deletedCustomerAddressId?: Maybe<Scalars['String']['output']>;
};

export type CustomerAddressUpdatePayload = {
  __typename?: 'CustomerAddressUpdatePayload';
  customerAddress?: Maybe<MailingAddress>;
  customerUserErrors: Array<CustomerUserError>;
};

export type CustomerDefaultAddressUpdatePayload = {
  __typename?: 'CustomerDefaultAddressUpdatePayload';
  customer?: Maybe<Customer>;
  customerUserErrors: Array<CustomerUserError>;
};

export enum CustomerErrorCode {
  AlreadyEnabled = 'ALREADY_ENABLED',
  BadDomain = 'BAD_DOMAIN',
  Blank = 'BLANK',
  ContainsHtmlTags = 'CONTAINS_HTML_TAGS',
  ContainsUrl = 'CONTAINS_URL',
  CustomerDisabled = 'CUSTOMER_DISABLED',
  Invalid = 'INVALID',
  InvalidMultiPassRequest = 'INVALID_MULTI_PASS_REQUEST',
  NotFound = 'NOT_FOUND',
  PasswordStartsOrEndsWithWhitespace = 'PASSWORD_STARTS_OR_ENDS_WITH_WHITESPACE',
  Taken = 'TAKEN',
  TooLong = 'TOO_LONG',
  TooShort = 'TOO_SHORT',
  UnidentifiedCustomer = 'UNIDENTIFIED_CUSTOMER'
}

export type CustomerUpdateInput = {
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type CustomerUpdatePayload = {
  __typename?: 'CustomerUpdatePayload';
  customer?: Maybe<Customer>;
  customerUserErrors: Array<CustomerUserError>;
};

export type CustomerUserError = {
  __typename?: 'CustomerUserError';
  code?: Maybe<CustomerErrorCode>;
  field?: Maybe<Array<Scalars['String']['output']>>;
  message: Scalars['String']['output'];
};

export type Image = {
  __typename?: 'Image';
  altText?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  url: Scalars['AWSURL']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type MailingAddress = {
  __typename?: 'MailingAddress';
  address1?: Maybe<Scalars['String']['output']>;
  address2?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  countryCode?: Maybe<CountryCode>;
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  zip?: Maybe<Scalars['String']['output']>;
};

export type MailingAddressInput = {
  address1?: InputMaybe<Scalars['String']['input']>;
  address2?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  zip?: InputMaybe<Scalars['String']['input']>;
};

export type Menu = {
  __typename?: 'Menu';
  handle: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isDefault: Scalars['Boolean']['output'];
  items: Array<MenuItem>;
  title: Scalars['String']['output'];
};

export type MenuConnection = {
  __typename?: 'MenuConnection';
  nodes?: Maybe<Array<Maybe<Menu>>>;
  pageInfo: PageInfo;
};

export type MenuItem = {
  __typename?: 'MenuItem';
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  type: MenuItemType;
  url?: Maybe<Scalars['String']['output']>;
};

export enum MenuItemType {
  Article = 'ARTICLE',
  Blog = 'BLOG',
  Catalog = 'CATALOG',
  Collection = 'COLLECTION',
  Collections = 'COLLECTIONS',
  CustomerAccountPage = 'CUSTOMER_ACCOUNT_PAGE',
  Frontpage = 'FRONTPAGE',
  Http = 'HTTP',
  Metaobject = 'METAOBJECT',
  Page = 'PAGE',
  Product = 'PRODUCT',
  Search = 'SEARCH',
  ShopPolicy = 'SHOP_POLICY'
}

export type Merchandise = {
  __typename?: 'Merchandise';
  ProductVariant?: Maybe<ProductVariant>;
};

export type Money = {
  __typename?: 'Money';
  amount?: Maybe<Scalars['String']['output']>;
  currencyCode?: Maybe<CurrencyCode>;
};

export type Mutation = {
  __typename?: 'Mutation';
  cartCreate?: Maybe<CartCreatePayload>;
  cartLinesAdd?: Maybe<CartLinesAddPayload>;
  cartLinesRemove?: Maybe<CartLinesRemovePayload>;
  cartLinesUpdate?: Maybe<CartLinesUpdatePayload>;
  confirmSignUp?: Maybe<AuthPayload>;
  customerAddressCreate?: Maybe<CustomerAddressCreatePayload>;
  customerAddressDelete?: Maybe<CustomerAddressDeletePayload>;
  customerAddressUpdate?: Maybe<CustomerAddressUpdatePayload>;
  customerDefaultAddressUpdate?: Maybe<CustomerDefaultAddressUpdatePayload>;
  customerUpdate?: Maybe<CustomerUpdatePayload>;
  signIn?: Maybe<AuthPayload>;
  signUp?: Maybe<AuthPayload>;
};


export type MutationCartCreateArgs = {
  input?: InputMaybe<CartInput>;
};


export type MutationCartLinesAddArgs = {
  cartId: Scalars['ID']['input'];
  lines: Array<CartLineInput>;
};


export type MutationCartLinesRemoveArgs = {
  cartId: Scalars['ID']['input'];
  lineIds: Array<Scalars['ID']['input']>;
};


export type MutationCartLinesUpdateArgs = {
  cartId: Scalars['ID']['input'];
  lines: Array<CartLineUpdateInput>;
};


export type MutationConfirmSignUpArgs = {
  email: Scalars['String']['input'];
  verificationCode: Scalars['String']['input'];
};


export type MutationCustomerAddressCreateArgs = {
  address: MailingAddressInput;
};


export type MutationCustomerAddressDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCustomerAddressUpdateArgs = {
  address: MailingAddressInput;
  id: Scalars['ID']['input'];
};


export type MutationCustomerDefaultAddressUpdateArgs = {
  addressId: Scalars['ID']['input'];
};


export type MutationCustomerUpdateArgs = {
  customer?: InputMaybe<CustomerUpdateInput>;
};


export type MutationSignInArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  storefrontId: Scalars['String']['input'];
};


export type MutationSignUpArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  storefrontId: Scalars['String']['input'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  currentPage: Scalars['Int']['output'];
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  totalCount: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type Product = {
  __typename?: 'Product';
  category?: Maybe<Category>;
  createdDate?: Maybe<Scalars['AWSDateTime']['output']>;
  descriptionHtml?: Maybe<Scalars['String']['output']>;
  handle?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  options?: Maybe<Array<Maybe<ProductOption>>>;
  publishedDate?: Maybe<Scalars['AWSDateTime']['output']>;
  status?: Maybe<ProductStatus>;
  title?: Maybe<Scalars['String']['output']>;
  totalInventory?: Maybe<Scalars['Int']['output']>;
  tracksInventory?: Maybe<Scalars['Boolean']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  variants?: Maybe<Array<Maybe<ProductVariant>>>;
  vendor?: Maybe<Scalars['String']['output']>;
};

export type ProductConnection = {
  __typename?: 'ProductConnection';
  nodes?: Maybe<Array<Maybe<Product>>>;
  pageInfo: PageInfo;
};

export type ProductOption = {
  __typename?: 'ProductOption';
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  optionValues?: Maybe<Array<Maybe<ProductOptionValue>>>;
};

export type ProductOptionValue = {
  __typename?: 'ProductOptionValue';
  id?: Maybe<Scalars['ID']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type ProductParams = {
  collectionId?: InputMaybe<Scalars['String']['input']>;
};

export enum ProductStatus {
  Active = 'ACTIVE',
  Archived = 'ARCHIVED',
  Draft = 'DRAFT'
}

export type ProductVariant = {
  __typename?: 'ProductVariant';
  barcode?: Maybe<Scalars['String']['output']>;
  compareAtPrice?: Maybe<Scalars['String']['output']>;
  createdDate?: Maybe<Scalars['AWSDateTime']['output']>;
  grams?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  inventoryPolicy?: Maybe<ProductVariantInventoryPolicy>;
  inventoryQuantity?: Maybe<Scalars['Int']['output']>;
  oldInventoryQuantity?: Maybe<Scalars['Int']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['String']['output']>;
  requiresShipping?: Maybe<Scalars['Boolean']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  stock?: Maybe<Scalars['String']['output']>;
  stockCode?: Maybe<Scalars['String']['output']>;
  taxCode?: Maybe<Scalars['String']['output']>;
  taxable?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  variantOptions?: Maybe<Array<Maybe<ProductVariantOptionValue>>>;
  weight?: Maybe<Scalars['Int']['output']>;
  weightUnit?: Maybe<Scalars['String']['output']>;
};

export enum ProductVariantInventoryPolicy {
  Continue = 'CONTINUE',
  Deny = 'DENY'
}

export type ProductVariantOptionValue = {
  __typename?: 'ProductVariantOptionValue';
  productOption?: Maybe<ProductOption>;
  productOptionValue?: Maybe<ProductOptionValue>;
  productVariant?: Maybe<ProductVariant>;
};

export type Query = {
  __typename?: 'Query';
  cart?: Maybe<Cart>;
  collection?: Maybe<Collection>;
  collections: CollectionConnection;
  menu?: Maybe<Menu>;
  menus: MenuConnection;
  product?: Maybe<Product>;
  products: ProductConnection;
};


export type QueryCartArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCollectionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCollectionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<SortInput>>>;
};


export type QueryMenuArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMenusArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<SortInput>>>;
};


export type QueryProductArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  params?: InputMaybe<ProductParams>;
  sort?: InputMaybe<Array<InputMaybe<SortInput>>>;
};

export type SortInput = {
  field: Scalars['String']['input'];
  order: SortOrder;
};

export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}
