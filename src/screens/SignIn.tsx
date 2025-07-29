import { VStack, Image, Text, Center, Heading } from "@gluestack-ui/themed";

import BackgroundImage from "@assets/background.png"
import Logo from "@assets/logo.svg"
import { Input } from "@components/Input"
export function SignIn() {
    return (
        <VStack flex={1} bg="$gray700">

            <Image
                w="100%"
                h={624}
                source={BackgroundImage}
                defaultSource={BackgroundImage}
                alt="Pessoa Treinando"
                position="absolute"
            />
            <VStack flex={1} px="$10">
                <Center my="$24">
                    <Logo 
                    />
                    <Text color="$gray100" fontSize="$sm">
                        Treine Sua mente e o Seu Corpo.
                    </Text>
                </Center>

                <Center gap="$2">
                    <Heading color="$gray100"> Acesse A Conta </Heading>
                    <Input placeholder="E-mail"
                      keyboardType="email-address"
                      autoCapitalize="none"
                    />
                    <Input placeholder="Senha" 
                    secureTextEntry
                    />
                </Center>
            </VStack>
        </VStack>
    )
}