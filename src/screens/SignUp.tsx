import { VStack, Image, Text, Center, Heading,ScrollView } from "@gluestack-ui/themed";

import BackgroundImage from "@assets/background.png"
import Logo from "@assets/logo.svg"
import { Input } from "@components/Input"
import { Button } from "@components/Button"

export function SignUp() {
    return (
        <ScrollView contentContainerStyle={{flexGrow:1}} showsVerticalScrollIndicator={false}>
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
                <Center gap="$2" flex={1}>
                    <Heading color="$gray100"> Crie Sua Conta  </Heading>
                    <Input placeholder="Nome"  
                    />
                    <Input placeholder="E-mail"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    <Input placeholder="Senha"
                        secureTextEntry
                    />
                    <Button title="Criar e Acessar"
                    />
                </Center>
                  <Center flex={1} justifyContent="flex-end" mt="$4" mb="$11">
                  <Button title="Voltar para o login" variant="solid" mt="$12" />

                </Center>
            </VStack>
        </VStack>
        </ScrollView>
    )
}