import { AddShoppingCart, Favorite, FavoriteBorder } from '@styled-icons/material-outlined';
import Image from 'next/image';

import { Button } from '@/components/Button';
import { Ribbon, RibbonColors, RibbonSizes } from '@/components/Ribbon';

import * as S from './styles';

export type GameCardProps = {
    title: string;
    developer: string;
    img: string;
    price: string;
    promotionalPrice?: string;
    favorite?: boolean;
    onFav?: () => void;
    ribbon?: React.ReactNode;
    ribbonSize?: RibbonSizes;
    ribbonColor?: RibbonColors;
};

export function GameCard({
    title,
    developer,
    img,
    price,
    promotionalPrice,
    favorite = false,
    onFav,
    ribbon,
    ribbonSize = 'small',
    ribbonColor = 'primary'
}: GameCardProps): JSX.Element {
    return (
        <S.Wrapper>
            <S.ImageBox>
                <Image src={img} alt={title} width={0} height={0} />
            </S.ImageBox>
            <S.Content>
                <S.Info>
                    <S.Title>{title}</S.Title>
                    <S.Developer>{developer}</S.Developer>
                </S.Info>
                <S.FavButton role="button" onClick={onFav}>
                    {favorite ? <Favorite aria-label="Remove from Wishlist" /> : <FavoriteBorder aria-label="Add to Wishlist" />}
                </S.FavButton>
                <S.BuyBox>
                    {!!promotionalPrice && <S.Price $isPromotional>{price}</S.Price>}
                    <S.Price>{promotionalPrice || price}</S.Price>
                    <Button icon={<AddShoppingCart />} size="small" />
                </S.BuyBox>
            </S.Content>
            {!!ribbon && (
                <Ribbon color={ribbonColor} size={ribbonSize}>
                    {ribbon}
                </Ribbon>
            )}
        </S.Wrapper>
    );
}
