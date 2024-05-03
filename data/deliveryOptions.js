import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
export const deliveryOptions = [{
    id: '1',
    deliveryDays: 7,
    priceCents: 0
}, {
    id: '2',
    deliveryDays: 3,
    priceCents: 499
}, {
    id: '3',
    deliveryDays: 1,
    priceCents: 999
}];

export function getDeliveryOption(deliveryOptionId) {
    let deliveryOption;

    deliveryOptions.forEach((option) => {
        if (option.id === deliveryOptionId) {
            deliveryOption = option;
        }
    });
    // Note: this code is a bit different from the video
    // because if you start directly from lesson 16, you
    // might not have deliveryOptionIds saved in localStorage.
    // In this case, this function will return the first
    // delivery option to avoid an error.
    return deliveryOption || deliveryOption[0];
}


function isWeekend(date) {
    const dayOfWeek = date.format('dddd');
    return dayOfWeek === 'Saturday' || dayOfWeek ==='Sunday';
}


export function calculateDeliveryDate(deliveryOption) {
   
    let remainingDays = deliveryOption.deliveryDays;
    let deliveryDate = dayjs();
    

    while (remainingDays > 0) {
        deliveryDate = deliveryDate.add(1, 'day');

        if (!isWeekend(deliveryDate)) {
            remainingDays--;
        }
    }

    const dateString = deliveryDate.format(
        'dddd, MMMM D'
      );

    return dateString;
   
}