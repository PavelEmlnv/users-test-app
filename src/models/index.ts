export class MPost implements IPost {
  public static create(props: any): IPost {
    return { ...new MPost(props) }
  }

  public id: number
  public userId: number
  public body: string
  public title: string
  public createdAt: string
  public updatedAt: string

  constructor(props: any = {}) {
    this.id = props.id || 0
    this.userId = props.user_id || 0
    this.body = props.body || ''
    this.title = props.title || ''
    this.createdAt = props.created_at || ''
    this.updatedAt = props.updated_at || ''    
  }
}

export class MComment implements IComment {
  public static create(props: any): IComment {
    return { ...new MComment(props) }
  }

  public id: number
  public postId: number
  public body: string
  public name: string
  public email: string
  public createdAt: string
  public updatedAt: string

  constructor(props: any = {}) {
    this.id = props.id || 0
    this.postId = props.post_id || 0
    this.body = props.body || ''
    this.name = props.name || ''
    this.email = props.email || ''
    this.createdAt = props.created_at || ''
    this.updatedAt = props.updated_at || ''    
  }
}

export class MUser implements IUser {
  public static create(props: any): IUser {
    return { ...new MUser(props) }
  }

  public id: number
  public email: string
  public name: string
  public gender: 'Male' | 'Female'
  public status: 'Active' | 'Inactive'
  public createdAt: string
  public updatedAt: string

  constructor(props: any = {}) {
    this.id = props.id || 0
    this.email = props.email || ''
    this.name = props.name || ''
    this.gender = props.gender || 'Male'
    this.status = props.status || 'Inactive'
    this.createdAt = props.created_at || ''
    this.updatedAt = props.updated_at || ''    
  }
}

