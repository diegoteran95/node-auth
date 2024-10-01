import {
  AuthDatasource,
  AuthRepository,
  RegisterUserDto,
  UserEntity,
} from "../../domain";

export class AuthRepositoryImpl implements AuthRepository {
  constructor(private readonly datasource: AuthDatasource) {}
  register(registerUsetDto: RegisterUserDto): Promise<UserEntity> {
    return this.datasource.register(registerUsetDto);
  }
}
