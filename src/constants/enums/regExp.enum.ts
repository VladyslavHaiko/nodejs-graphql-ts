export const RegExpEnum = {
  password: new RegExp('^(?!.* )(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*[@$!%*#?&]).{8,}$'),
  email: new RegExp(`^((?!\\.)[\\w-_.]*[^.])(@\\w+)(\\.\\w+(\\.\\w+)?[^.\\W])$`),
  phone_number: new RegExp('^[0-9]{10}$')
};
