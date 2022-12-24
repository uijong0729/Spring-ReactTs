/**
 * 
 *  public Long id; 
    public String text;
    public TodoStatus status = TodoStatus.IMCOMPLETED;
 */

export type UserEntity = {
    username: string;
    groupId?: string;
    password: string;
};