import { FormEvent } from "react";
import {
    SignUpOnlineDiv, FormContainer, Title, Form, Text, Select,
    Option, Label, Input, Button, InputMaskContainer
} from "../styles/signUpOnlineStyles";
import $ from 'jquery';

const SignUpOnline = () => {
    const services = ["Стрижка", "Окрашивание в 1 тон", "Сложное окрашивание", "Мелирование", "Окрашивание корней", "Наращивание", "Коррекция", "Консультация",]

    const chatid = "858233214"; //858233214  //822399090
    const token = "5898100145:AAH-TUObmsPplz-1di8ovtYTX_TzunXp8SI";
    // const text = "Текст для <b>нашего</b> бота";

    const user = {
        name: "",
        service: "",
        phoneNumber: "",
        link: "",
    }

    const sendMessage = (e: FormEvent) => {
        e.preventDefault();
        console.log(user.name);
        console.log(user.service);
        console.log(user.phoneNumber);
        console.log(user.link);
        var result = $.ajax({
            type: "POST",
            url: "https://api.telegram.org/bot" + token + "/sendMessage?chat_id=" + chatid,
            data: "parse_mode=HTML&text=" + encodeURIComponent(
                user.name + " хочет записаться" + "\n" +
                "Услуга: " + user.service + "\n" +
                "Номер телефона: " + user.phoneNumber + "\n" +
                "Мессенджер: " + user.link
            ),
        });
        const name = document.getElementById("name");
        (name as HTMLInputElement).value = "";
        const service = document.getElementById("service");
        (service as HTMLInputElement).value = "";
        const number = document.getElementById("number");
        (number as HTMLInputElement).value = "";
        const link = document.getElementById("link");
        (link as HTMLInputElement).value = "";
    }

    return (
        <SignUpOnlineDiv id='SignUpOnline'>
            <Title>
                Запись на услугу
            </Title>
            {/* <Form>
                <Select>
                    <Option value=""></Option>
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
                    <Select
                        id="service"
                        required
                        onChange={(service) => user.service = service.target.value}
                    >
                        <Option value="" selected disabled hidden>--Выберите услугу--</Option>
                        <Option value={services[0]}>{services[0]}</Option>
                        <Option value={services[1]}>{services[1]}</Option>
                        <Option value={services[2]}>{services[2]}</Option>
                        <Option value={services[3]}>{services[3]}</Option>
                        <Option value={services[4]}>{services[4]}</Option>
                        <Option value={services[5]}>{services[5]}</Option>
                        <Option value={services[6]}>{services[6]}</Option>
                        <Option value={services[7]}>{services[7]}</Option>
                    </Select>
                    {/* <Input
                        id="service"
                        required
                        pattern="^[^\s]+(\s.*)?$"
                        onChange={(service) => user.service = service.target.value}
                    /> */}
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
                    <Text>
                        Ссылка на мессенджер:
                    </Text>
                    <Input
                        id="link"
                        required
                        onChange={(link) => user.link = link.target.value}
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