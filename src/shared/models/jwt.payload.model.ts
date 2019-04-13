import { ApiModelProperty } from '@nestjs/swagger';

export class JwtPayload {

    @ApiModelProperty()
    name: string;

    @ApiModelProperty()
    id: number;
}
