import { FormEvent } from "react";
import {
    SignUpOnlineDiv, FormContainer, Title, Form, Text, Select,
    Option, Label, Input, Button, InputMaskContainer
} from "../styles/signUpOnlineStyles";
import $ from 'jquery';

const SignUpOnline = () => {
    // const services = ["Услуга 1", "Услуга 2", "Услуга 3", "Услуга 4", "Услуга 5",]

    const chatid = "822399090"; //858233214  //822399090
    const token = "5959198957:AAF0KiqiHGzxq44BA1_icmnUZEfdQRxzcUo";
    // const text = "Текст для <b>нашего</b> бота";

    const user = {
        name: "",
        service: "",
        phoneNumber: "",
    }

    const sendMessage = (e: FormEvent) => {
        e.preventDefault();
        console.log(user.name);
        console.log(user.service);
        console.log(user.phoneNumber);
        var result = $.ajax({
            type: "POST",
            url: "https://api.telegram.org/bot" + token + "/sendMessage?chat_id=" + chatid,
            data: "parse_mode=HTML&text=" + encodeURIComponent(
                user.name + " хочет записаться" + "\n" +
                "Услуга: " + user.service + "\n" +
                "Номер телефона: " + user.phoneNumber
            ),
        });
        const name = document.getElementById("name");
        (name as HTMLInputElement).value = "";
        const service = document.getElementById("service");
        (service as HTMLInputElement).value = "";
        const number = document.getElementById("number");
        (number as HTMLInputElement).value = "";
    }

    return (
        <SignUpOnlineDiv id='SignUpOnline'>
            <Title>
                Запись на услугу
            </Title>
            {/* <Form>
                <Select>
                    <Option value="">--Выберите мастера--</Option>
                    <Option value={services[0]}>{services[0]}</Option>
                    <Option value={services[1]}>{services[1]}</Option>
                    <Option value={services[2]}>{services[2]}</Option>
                    <Option value={services[3]}>{services[3]}</Option>
                    <Option value={services[4]}>{services[4]}</Option>
                </Select>
                <br></br>
                <Select>
                    <Option value="">--Выберите услугу--</Option>
                    <Option value={services[0]}>{services[0]}</Option>
                    <Option value={services[1]}>{services[1]}</Option>
                    <Option value={services[2]}>{services[2]}</Option>
                    <Option value={services[3]}>{services[3]}</Option>
                    <Option value={services[4]}>{services[4]}</Option>
                </Select>
                <br></br>
                <Select>
                    <Option value="">--Выберите дату--</Option>
                    <Option value={services[0]}>{services[0]}</Option>
                    <Option value={services[1]}>{services[1]}</Option>
                    <Option value={services[2]}>{services[2]}</Option>
                    <Option value={services[3]}>{services[3]}</Option>
                    <Option value={services[4]}>{services[4]}</Option>
                </Select>
                <br></br>
                <Select>
                    <Option value="">--Выберите время--</Option>
                    <Option value={services[0]}>{services[0]}</Option>
                    <Option value={services[1]}>{services[1]}</Option>
                    <Option value={services[2]}>{services[2]}</Option>
                    <Option value={services[3]}>{services[3]}</Option>
                    <Option value={services[4]}>{services[4]}</Option>
                </Select>
            </Form> */}

            <Form onSubmit={(e) => sendMessage(e)} id='form'>
                <FormContainer>
                    <Text>
                        Ваше имя:
                    </Text>
                    <Input
                        id="name"
                        required
                        pattern="^[^\s]+(\s.*)?$"
                        onChange={(name) => user.name = name.target.value}
                    />
                    <Text>
                        Услуга:
                    </Text>
                    <Input
                        id="service"
                        required
                        pattern="^[^\s]+(\s.*)?$"
                        onChange={(service) => user.service = service.target.value}
                    />
                    <Text>
                        Ваш номер телефона:
                    </Text>
                    <InputMaskContainer
                        id="number"
                        mask="8(999)999-99-99"
                        type="tel"
                        name="tel"
                        pattern="8\([0-9]{3}\)[0-9]{3}-[0-9]{2}-[0-9]{2}"
                        autoComplete="off"
                        required
                        placeholder="8(999)999-99-99"
                        onChange={(number) => user.phoneNumber = number.target.value}
                    />
                    <Button
                        type="submit"
                    >
                        Отправить
                    </Button>
                </FormContainer>
            </Form>
        </SignUpOnlineDiv>
    )
}
export default SignUpOnline;