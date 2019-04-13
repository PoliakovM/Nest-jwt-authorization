import { ApiModelProperty } from '@nestjs/swagger';

export class UserDto {

    @ApiModelProperty()
    email: string;

    @ApiModelProperty()
    name: string;

    @ApiModelProperty()
    lastname: string;

    @ApiModelProperty()
    password: string;
}
