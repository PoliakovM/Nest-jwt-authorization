import { ApiModelProperty } from '@nestjs/swagger';

export class UserCreds {

    @ApiModelProperty()
    email: string;

    @ApiModelProperty()
    password: string;
}
