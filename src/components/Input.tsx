import { Input as GluestackInput, InputField } from "@gluestack-ui/themed"
import { ComponentProps } from "react"


type Props =  ComponentProps<typeof InputField>


export function Input({...rest}: Props) {
    return (
        <GluestackInput bg="$gray700" h="$12" p="$3">

            <InputField 
            {...rest}
            />
            
        </GluestackInput>
    )
}