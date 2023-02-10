import dayjs from "dayjs";

const dateFormatter = {
    toFormattedDate: (iso)=>{return dayjs(iso).format("HH:mm:ss  D.MM.YYYY")}
}

export default dateFormatter;