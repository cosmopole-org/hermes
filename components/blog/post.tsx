'use client'

import { getUsers } from "@/api/offline/constants";
import Icon from "@/components/elements/icon";
import { Card, CardHeader, CardBody, CardFooter, Avatar, Chip, Image } from "@nextui-org/react";
import React from "react";

export default function BlogPost() {
    return (
        <Card shadow="none" isPressable isBlurred className={"w-full h-fullb bg-white/40 dark:bg-black/10"}>
            <CardHeader className="justify-between">
                <div className="flex gap-5 w-full">
                    <Avatar isBordered radius="full" size="md" src={getUsers()[4].avatar} />
                    <div className="flex flex-col gap-1 items-start justify-center">
                        <h4 className="text-small font-semibold leading-none text-default-600">Zoey Lang</h4>
                        <h5 className="text-small tracking-tight text-default-500">@zoeylang</h5>
                    </div>
                    <Chip
                        className="ml-auto mr-0"
                        variant="flat"
                        avatar={
                            <span aria-label="computer" role="img">
                                <Icon size={[18, 18]} name="dbl-tick" />
                            </span>
                        }
                    >
                        11:51
                    </Chip>
                </div>
            </CardHeader>
            <CardBody className="overflow-hidden px-3 py-0 text-small text-default-900">
                <Image
                    shadow="sm"
                    radius="lg"
                    width="100%"
                    alt={"hello world"}
                    className="w-full object-cover h-[140px]"
                    src={'https://nextui.org/images/hero-card.jpeg'}
                />
            </CardBody>
            <CardFooter className="gap-3">
                <div className="flex gap-1">
                    <Chip
                        variant="flat"
                        avatar={
                            <span aria-label="computer" role="img">
                                😺
                            </span>
                        }
                    >
                        5.4k
                    </Chip>
                    <Chip
                        variant="flat"
                        avatar={
                            <span aria-label="computer" role="img">
                                😜
                            </span>
                        }
                    >
                        3.5k
                    </Chip>
                    <Chip
                        variant="flat"
                        avatar={
                            <span aria-label="computer" role="img">
                                😎
                            </span>
                        }
                    >
                        7.2k
                    </Chip>
                </div>
            </CardFooter>
        </Card>
    )
}