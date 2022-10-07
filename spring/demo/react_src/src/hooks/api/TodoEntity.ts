/**
 * 
 *  public Long id; 
    public String text;
    public TodoStatus status = TodoStatus.IMCOMPLETED;
 */
export type TodoEntity = {
    id: number;
    text: string;
    status: TodoStatus;
    deadline: Date;
    registrantId: String;         // 등록자
    assignedUserId: String;       // 할당대상
};

export enum TodoStatus {
    COMPLETED = "COMPLETED",
    IMCOMPLETED = "IMCOMPLETED",
    DELETED = "DELETED"
}