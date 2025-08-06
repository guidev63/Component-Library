import { ButtonSpinner, Button as GluestackButton, Text,  } from '@gluestack-ui/themed';
import { ComponentProps } from 'react';

type Props = ComponentProps<typeof GluestackButton> & {
  title: string;
  variant?:"solid" | "outline";
  isLoading?: boolean;
};

export function Button({ title, variant = "solid", isLoading = false, ...rest }: Props) {
  return (
    <GluestackButton
      w="$full"
      h="$12"
      bg={ variant === "outline" ? "transparent" : "$green700"}
      borderWidth={variant ==="outline" ? "$1": "$0"}
      borderColor="$green500"
      rounded="$sm"
      $active-bg={ variant ==="outline" ? "$gray500" : "$green500"}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? (
        <ButtonSpinner
          color="$white"
        />
      ) : (
        <Text color={ variant ==="outline" ? "$gray500" : "$white"} fontFamily="$heading" fontSize="$sm">
          {title}
        </Text>
      )}
    </GluestackButton>
  );
}
