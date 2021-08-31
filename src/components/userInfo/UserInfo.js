export default function UserInfo ({userInfo: {email, phone, website }}) {
    return (
        <div>
            email - {email}
            phone - {phone}
            website - {website}
        </div>
    );
 }
