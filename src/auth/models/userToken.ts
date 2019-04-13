import { ApiModelProperty } from '@nestjs/swagger';

export class UserToken {
    @ApiModelProperty()
    acsessToken: string;
}
