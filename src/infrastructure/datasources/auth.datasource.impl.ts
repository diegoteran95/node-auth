import {
  AuthDatasource,
  CustomError,
  RegisterUserDto,
  UserEntity,
} from "../../domain";

export class AuthDatasourceImpl implements AuthDatasource {
  async register(registerUsetDto: RegisterUserDto): Promise<UserEntity> {
    const { name, email, password } = registerUsetDto;

    try {
      return new UserEntity("1", name, email, password, "ADMIN");
    } catch (error) {
      if (error instanceof CustomError) throw error;
      throw CustomError.internalServer();
    }
  }
}
