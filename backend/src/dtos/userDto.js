class UserDto {
  constructor(model) {
    this.email = model.email;
    this.username = model.username;
    this.password = model.password;
    this.id = model._id;
  }
}

export { UserDto };
