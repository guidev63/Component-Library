import { Input as GluestackInput, InputField } from "@gluestack-ui/themed"
import { ComponentProps } from "react"

type Props =  ComponentProps<typeof InputField>

export function Input({...rest}: Props) {
    return (
        <GluestackInput 
        bg="$gray700"
        h="$12" p="$3"
         borderWidth="$0" 
         borderRadius="$md"
           $focus={{
             borderWidth: 1,
             borderColor: "$green500",
           }}
         >
        <InputField 
        color="$white"
        {...rest}
     />
        </GluestackInput>
    )
}