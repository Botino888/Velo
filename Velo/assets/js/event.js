﻿//function agreePolicy() {
//    var footerFixed = document.querySelector('.welcome-footer-fixed-bottom')
//    var container = footerFixed.parentElement
//    container.removeChild(footerFixed)
//}

$('.welcome-footer__btn-child').click(function () {
    $('.welcome-footer-fixed-bottom').remove()
})

function closeEventListeners() {
    $('.form-container').click(function (e) {
        if (!e.target.closest('.form')) {
            $('.form-container').remove()
        }
    })

    $('.form-close').click(function () {
        $('.form-container').remove()
    })
}

$('#btn-sign-in').click(function () {
    $('body').append(
        `<div class="bg-dark form-container">
            <form action="" method="POST" class="form" id="form-sign-in">
                <h3 class="form__heading">Đăng nhập Velo</h3>
                <p class="form__desc">Nơi tình yêu kết trái</p>

                <div class="spacer"></div>

                <div class="form-group">
                    <label for="email" class="form-label">Email</label>
                    <input id="email" name="email" type="text" placeholder="VD: email@domain.com" class="form-control">
                    <span class="form-message"></span>
                </div>

                <div class="form-group">
                    <label for="password" class="form-label">Mật khẩu</label>
                    <input id="password" name="password" type="password" placeholder="Nhập mật khẩu" class="form-control">
                    <span class="form-message"></span>
                </div>

                <button class="form-submit">Đăng nhập</button>

                <div class="form-close">
                    <i class="fas fa-times"></i>
                </div>
            </form>
        </div>`
    )
    closeEventListeners()
})

$('#btn-sign-up').click(function () {
    $('body').append(
        `<div class="bg-dark form-container">
            <form action="" method="POST" class="form" id="form-sign-up">
                <h3 class="form__heading">Đăng ký Velo</h3>
                <p class="form__desc">Chào mừng bạn đến với Velo</p>

                <div class="spacer"></div>

                <div class="form-line">
                    <div class="form-group">
                        <label for="id" class="form-label">Tên đăng nhập</label>
                        <input id="id" name="id" type="text" placeholder="Tên đăng nhập" class="form-control">
                        <span class="form-message"></span>
                    </div>
                    <div class="form-group">
                        <label for="name" class="form-label">Họ tên</label>
                        <input id="name" name="name" placeholder="Họ tên" type="text" class="form-control">
                        <span class="form-message"></span>
                    </div>
                </div>
            
                <div class="form-line">
                    <div class="form-group">
                        <label for="password_confirmation" class="form-label">Xác nhận mật khẩu</label>
                        <input id="password_confirmation" name="password_confirmation" placeholder="Nhập lại mật khẩu" type="password" class="form-control">
                        <span class="form-message"></span>
                    </div>
                    <div class="form-group">
                        <label for="password" class="form-label">Mật khẩu</label>
                        <input id="password" name="password" type="password" placeholder="Nhập mật khẩu" class="form-control">
                        <span class="form-message"></span>
                    </div>
                </div>
            
                <div class="form-line">
                    <div class="form-group">
                        <label for="birthday" class="form-label">Ngày sinh</label>
                        <input id="birthday" name="birthday" placeholder="Ngày sinh" type="date" class="form-control">
                        <span class="form-message"></span>
                    </div>
                    <div class="form-group">
                        <label for="email" class="form-label">Email</label>
                        <input id="email" name="email" type="email" placeholder="VD: email@domain.com" class="form-control">
                        <span class="form-message"></span>
                    </div>
                </div>
            
                <div class="form-line">
                    <div class="form-group">
                        <label for="nationality" class="form-label">Quốc tịch</label>
                        <input id="nationality" name="nationality" placeholder="Quốc tịch" type="text" class="form-control" list="nations">
                        <datalist id="nations">
                            <option value="Việt Nam"></option>
                            <option value="Thái Lan"></option>
                            <option value="Trung Quốc"></option>
                            <option value="Nhật Bản"></option>
                            <option value="Hàn Quốc"></option>
                            <option value="Mỹ"></option>
                            <option value="Canada"></option>
                            <option value="Brazil"></option>
                            <option value="Italia"></option>
                            <option value="Pháp"></option>
                            <option value="Đức"></option>
                            <option value="Nga"></option>
                            <option value="Nam Phi"></option>
                        </datalist>
                        <span class="form-message"></span>
                    </div>

                    <div class="form-group">
                        <label for="hobby" class="form-label">Sở thích</label>
                        <input id="hobby" name="hobby" type="text" placeholder="Sở thích" class="form-control" list="hobbies">
                        <datalist id="hobbies">
                            <option value="Ẩm thực"></option>
                            <option value="Làm đẹp"></option>
                            <option value="Thời trang"></option>
                            <option value="Nghiên cứu"></option>
                            <option value="Thể thao"></option>
                            <option value="Du lịch"></option>
                            <option value="Công nghệ"></option>
                            <option value="Động vật"></option>
                        </datalist>
                        <span class="form-message"></span>
                    </div>
                </div>

                <button class="form-submit">Đăng ký</button>

                <div class="form-close">
                    <i class="fas fa-times"></i>
                </div>
            </form>
        </div>`
    )
    closeEventListeners()
})