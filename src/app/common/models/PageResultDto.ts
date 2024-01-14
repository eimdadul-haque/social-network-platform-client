
export class PageResultDto<T> {
    constructor() {
        this.items = []
        this.totalCount = 0;
    }

    items: T[];
    totalCount: number;
}