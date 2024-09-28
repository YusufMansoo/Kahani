/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ReelWhereInput } from "./ReelWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ReelOrderByInput } from "./ReelOrderByInput";

@ArgsType()
class ReelFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ReelWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ReelWhereInput, { nullable: true })
  @Type(() => ReelWhereInput)
  where?: ReelWhereInput;

  @ApiProperty({
    required: false,
    type: [ReelOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ReelOrderByInput], { nullable: true })
  @Type(() => ReelOrderByInput)
  orderBy?: Array<ReelOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ReelFindManyArgs as ReelFindManyArgs };
