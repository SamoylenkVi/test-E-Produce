import alisaImgUrl from '../../../../public/img/alisa.png';
import watchImgUrl from '../../../../public/img/watch.png';
import scooterImgUrl from '../../../../public/img/scooter.png';

const presentName = ['Электросамокат', 'Колонка', 'Смарт часы'];
const presentUrl = [scooterImgUrl, alisaImgUrl, watchImgUrl];

export const presents = new Array(3).fill('').map((element, index) => {
  return (element = {
    id: index,
    name: presentName[index],
    image: presentUrl[index],
  });
});
