import { VStack, Image, Center } from "@gluestack-ui/themed";

import BackgroundImage from "@assets/background.png"
import Logo from "@assets/logo.svg"
import { Text } from "react-native-svg";
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
            <Center my="$24">
                <Logo />
                <Text color="$gray100" fontSize="$sm">
                    Treine sua mente e o seu Corpo.
                </Text>
            </Center>
        </VStack>
    )
}